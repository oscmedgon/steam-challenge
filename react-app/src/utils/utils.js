import {getUserGameList, getUserInfo, getSteamId, getFriends, getPlayerBans} from '../services/steamApi'
// Esta función recibe el ID  desde la función  checkUser o dsd verify UserName, según qué haya introducido el usuario
// retorna otra llamada a la API ( getUserInfo) si el ID existe es OK y guarda la info del player
function verifySteamId (input) {
  return getUserInfo(input).then(function (ApiData) {
    if (ApiData.data.response.players[0].steamid) {
      const player = ApiData.data.response.players[0]

      player.status = 'ok'
      player.input = player.steamid

      return player
    } else {
      return {input: input, status: 'ko'}
    }
  })
}
// verifyUserName llama a la función getSteamId que hace una llamada a la API con el parametro Input del usuario.
// Si consigo el ID el retorno es llamar a función verifySteamId  con el ID que nos acaban de pasar
function verifyUserName (input) {
  return getSteamId(input).then(function (ApiData) {
    if (ApiData.data.response.steamid) {
      return verifySteamId(ApiData.data.response.steamid)
    } else {
      return {input: input, status: 'ko'}
    }
  })
}
// Esta función me acaba devolviendo el ID si tengo un name, o la info del usurio si lo que tengo ya es un ID
function checkUser (userInput) {
  if (userInput.match(/(\b\d{17}\b)/)) {
    return verifySteamId(userInput)
  } else {
    return verifyUserName(userInput)
  }
}

function matchGames (player1Games, player2Games, updateGameList) {
  const aMatchedGames = player1Games.games.filter(function (misagame) {
    return player2Games.games.find(function (tusagame) {
      return tusagame.appid === misagame.appid
    })
  })
  updateGameList(aMatchedGames)
}

function getGamesList (id1, id2, updateGameList) {
  getUserGameList(id1).then(function (apiData) {
    const player1Games = apiData.data.response
    getUserGameList(id2).then(function (apiData) {
      const player2Games = apiData.data.response
      matchGames(player1Games, player2Games, updateGameList)
    }
  )
  }
)
}

function playerCheckInfo (userInput, updater) {
  if (userInput.match(/(\b\d{17}\b)/)) {
    checkPlayerSteamId(userInput, updater)
  } else {
    checkPlayerVanityUrl(userInput, updater)
  }
}

function checkPlayerVanityUrl (vanityUrl, updater) {
  getSteamId(vanityUrl).then(function (data) {
    console.log(data.data.response)
    if (data.data.response.success === 1) {
      const steamID = data.data.response.steamid
      const apiResponses = []
      checkPlayerSteamId(steamID, updater)
        .then(function (data) {
          apiResponses.push(data.data.response.players[0])
        })
      checkPlayerGameList(steamID)
        .then(function (data) {
          apiResponses.push(data.data.response)
        })
      checkFriendList(steamID)
        .then(function (data) {
          apiResponses.push(data.data.friendslist)
        })
      checkPlayerBanns(steamID)
        .then(function (data) {
          apiResponses.push(data.data.players[0])
        })
      Promise.all([checkPlayerSteamId, checkPlayerGameList, checkFriendList, checkPlayerBanns])
          .then(() => {
            updater(apiResponses, 'ok')
          })
    } else {
      updater({}, 'ko')
    }
  })
}
function checkPlayerSteamId (steamId) {
  return getUserInfo(steamId)
}
function checkPlayerGameList (steamId) {
  return getUserGameList(steamId)
}
function checkFriendList (steamId) {
  return getFriends(steamId)
}
function checkPlayerBanns (steamid) {
  return getPlayerBans(steamid)
}

export {checkUser, getGamesList, playerCheckInfo}

import {getUserGameList, getUserInfo, getSteamId} from '../services/steamApi'

function verifySteamId (input) {
  return getUserInfo(input).then(function (ApiData) {
    if (ApiData.data.response.players[0].steamid) {
      const player = ApiData.data.response.players[0]

      player.status = 'ok'
      player.input = player.steamid

      return player
    } else {
      return {input: '', status: 'ko'}
    }
  })
}

function verifyUserName (input) {
  return getSteamId(input).then(function (ApiData) {
    if (ApiData.data.response.steamid) {
      return verifySteamId(ApiData.data.response.steamid)
    } else {
      return {input: '', status: 'ko'}
    }
  })
}

function checkUser (userInput) {
  if (userInput.match(/(\b\d{17}\b)/)) {
    return verifySteamId(userInput)
  } else {
    return verifyUserName(userInput)
  }
}
function matchGames(playersGames){

}
function getGamesList (id1, id2) {
  console.log(id1 , id2)
  getUserGameList(id1).then(function (apiData) {
    const player1Games = apiData.data.response
    console.log(player1Games)
    getUserGameList(id2).then(function (apiData) {
      const player2Games = apiData.data.response
      console.log(player2Games)
      matchGames([player1Games, player2Games])
    }
  )
  }
)
}

export {checkUser, getGamesList}

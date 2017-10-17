import {getUserInfo, getSteamId} from '../services/steamApi'

function verifySteamId (data, updaterMethod, player) {
  getUserInfo(data).then(function (ApiData) {
    if (ApiData.data.response.players[0].steamid) {
      updaterMethod(data, 'ok', player, ApiData.data.response.players[0].personaname)
    } else {
      updaterMethod(data, 'ko', player, '')
    }
  })
}

function verifyUserName (data, updaterMethod, player) {
  getSteamId(data).then(function (ApiData) {
	console.log(data)
    if (ApiData.data.response.steamid) {

			updaterMethod(ApiData.data.response.steamid, 'ok', player, data)
    } else {
      updaterMethod(data, 'ko', player, '')
    }
  })
}

function dataType (userInput, updaterMethod, player) {
  console.log(userInput)
  if (userInput.match(/(\b\d{17}\b)/)) {
    verifySteamId(userInput, updaterMethod, player)
  } else {
    verifyUserName(userInput, updaterMethod, player)
  }
}

export {dataType}

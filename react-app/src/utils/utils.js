import {getUserInfo, getSteamId} from '../services/steamApi'

function verifySteamId (data) {
  return getUserInfo(data).then(function (ApiData) {
		console.log(data)
    if (ApiData.data.response.players[0].steamid) {
      return data
    } else {
      return 'No match for ' + data
    }
  })
}

function verifyUserName (data) {
  getSteamId(data).then(function (ApiData) {
	console.log(data)
    if (ApiData.data.response.steamid) {
      return ApiData.data.response.steamid
    } else {
      return 'No user found for ' + data
    }
  })
}

function dataType (userInput) {
  console.log(userInput)
  if (userInput.match(/(\b\d{17}\b)/)) {
    console.log(verifySteamId(userInput))
  } else {
    console.log(verifyUserName(userInput))
  }
}

export {dataType}

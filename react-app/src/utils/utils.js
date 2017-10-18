import {getUserInfo, getSteamId} from '../services/steamApi'

function verifySteamId(input) {
    return getUserInfo(input)
        .then(function (ApiData) {
            if (ApiData.data.response.players[0].steamid) {
                const player = ApiData.data.response.players[0]

                player.status = 'ok'
                player.input = player.steamid

                return player
            } else {
                return {
                    input: '',
                    status: 'ko'
                }
            }
        })
}

function verifyUserName(input) {
    return getSteamId(input)
        .then(function (ApiData) {
            if (ApiData.data.response.steamid) {
                return verifySteamId(ApiData.data.response.steamid)
            } else {
                return {
                    input: '',
                    status: 'ko'
                }
            }
        })
}

function checkUser(userInput) {
    if (userInput.match(/(\b\d{17}\b)/)) {
        return verifySteamId(userInput)
    } else {
        return verifyUserName(userInput)
    }
}

export {checkUser}

import axios from 'axios'

// Those are the prerequisites to call steam API, Token and base url
const apiKey = 'A503C16ED9072A5F9C8F45C8E4E023F9'
const urlVanityNameSearch = 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/'
const urlSearchUserGameList = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/'
const urlGameAchivements = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/'
const urlUserInfo = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/'
const urlGetGameInfo = 'https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/'

// This function should be called with a string
// This function converts a username to a steamID

function getSteamId (vanityName) {
  return (axios.get({
    url: urlVanityNameSearch,
    data: {
      vanityurl: vanityName,
      key: apiKey,
      format: 'jsonp'
    }
  })
  )
}

// This function should be called with a string
// This function returns all user info

function getUserInfo (steamid) {
  return (axios.get({
    url: urlUserInfo,
    data: {
      vanityurl: steamid,
      key: apiKey,
      format: 'jsonp'
    }
  })
  )
}
// This function should be called with a string
// This function returns the list of games of an user

function getUserGameList (steamid) {
  return (axios.get({
    url: urlSearchUserGameList,
    data: {
      vanityurl: steamid,
      key: apiKey,
      format: 'jsonp'
    }
  })
  )
}

// IMPORTANT INFO THIS FUNCTION SHOULD BE CALLED WITTH TWO STRINGS
// This function returns achivement information about a game and a user
function searchGameAchivements (appId, steamid) {
  return (axios.get({
    url: urlGameAchivements,
    data: {
      appid: appId,
      key: apiKey,
      steamid: steamid,
      format: 'jsonp'
    }
  })
  )
}

// IMPORTANT INFO THIS FUNCTION SHOULD BE CALLED WITH A STRING
// This function returns all information about a game.
function getGameInfo (appId) {
  return (axios.get({
    url: urlGetGameInfo,
    data: {
      appid: appId,
      format: 'jsonp'
    }
  })
  )
}

export {getGameInfo, searchGameAchivements, getSteamId, getUserInfo, getUserGameList}

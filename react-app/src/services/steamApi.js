import axios from 'axios'

// Those are the prerequisites to call steam API, Token and base url
const apiKey = 'CD18B4C89181FB1E71DB9A5EC21AA8CC'
const urlVanityNameSearch = 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/'
const urlSearchUserGameList = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/'
const urlGameAchivements = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/'
const urlUserInfo = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/'
const urlGetGameInfo = 'https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/'
const urlGetFriendList = 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/'
const urlGetPlayerBans = 'http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/'

// This function should be called with a string
// This function converts a username to a steamID

function getSteamId (vanityName) {
  return (axios.get(urlVanityNameSearch, {
    params: {
      vanityurl: vanityName,
      key: apiKey
    }
  })
  )
}

// This function should be called with a string
// This function returns all user info

function getUserInfo (steamid) {
  return (axios.get(urlUserInfo, {
    params: {
      steamids: steamid,
      key: apiKey
    }
  })
  )
}

// This function should be called with a string
// This function returns the list of games of an user

function getUserGameList (steamid) {
  return (axios.get(urlSearchUserGameList, {
    params: {
      steamid: steamid,
      key: apiKey
    }
  })
  )
}

// IMPORTANT INFO THIS FUNCTION SHOULD BE CALLED WITTH TWO STRINGS
// This function returns achivement information about a game and a user
function searchGameAchivements (appId, steamid) {
  return (axios.get(urlGameAchivements, {
    params: {
      appid: appId,
      key: apiKey,
      steamid: steamid
    }
  })
  )
}

// IMPORTANT INFO THIS FUNCTION SHOULD BE CALLED WITH A STRING
// This function returns all information about a game.
function getGameInfo (appId) {
  return (axios.get(urlGetGameInfo, {
    params: {
      appid: appId,
      key: apiKey
    }
  })
  )
}

function getFriends (steamid) {
  return (axios.get(urlGetFriendList, {
    params: {
      steamid: steamid,
      key: apiKey,
      relationship: 'friend'
    }
  })
  )
}

function getPlayerBans (steamid) {
  return (axios.get(urlGetPlayerBans, {
    params: {
      steamids: steamid,
      key: apiKey
    }
  })
  )
}

export {getGameInfo, searchGameAchivements, getSteamId, getUserInfo, getUserGameList, getFriends, getPlayerBans}

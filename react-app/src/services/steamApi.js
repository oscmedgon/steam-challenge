import axios from 'axios'

// Those are the prerequisites to call steam API, Token and base url
const apiKey = 'A503C16ED9072A5F9C8F45C8E4E023F9'
const urlVanityNameSearch = 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/'
const urlSearchUserGameList = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/'
const urlGameAchivements = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/'
const urlUserInfo = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/'
const getGameInfo = 'https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/'

// This function should be called with a string
// This function converts a username to a steamID
// EJECUTE THIS COMMAND IN CONSOLE TO GET A PREVIEW OF THE SERVER RESPONSE

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

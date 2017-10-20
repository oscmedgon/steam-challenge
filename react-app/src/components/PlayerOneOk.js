import React from 'react'

const PlayerOneOk = ({playerInfo}) => (
  <div className='container info'>
    <div className='col-xs-12'>
      <div className='col-sm-3'>
        {console.log(playerInfo)}
        <img src={playerInfo.playerData.avatarfull} className='img-responsive img-circle' alt='playerImg' />
      </div>
      <div className='col-sm-9'>
        <h2><a href={playerInfo.playerData.profileurl}>{playerInfo.playerData.personaname}</a></h2>
      </div>
    </div>
    <div className='col-xs-12'>
      <ul className='list-unstyled'>
        {console.log(playerInfo.playerFriends, 'no, yo soy player info')}
        <li><strong>Username:</strong> {playerInfo.playerData.personaname}</li>
        <li><strong>Profile URL:</strong> {playerInfo.playerData.profileurl}</li>
        <li><strong>SteamID</strong> {playerInfo.playerData.steamid}</li>
        <li><strong>Player total games:</strong> {playerInfo.playerGames.game_count}</li>
        <li><strong>Player total friends</strong> {playerInfo.playerFriends.friends.length}</li>
        <h3>Player bans state</h3>
        <li><strong>Comunity status:</strong> {playerInfo.playerBanns.CommunityBanned ? 'Banned' : 'Not banned'}</li>
        <li><strong>Economy ban status:</strong> {playerInfo.playerBanns.EconomyBan}</li>
        <li><strong>Game bans:</strong> {playerInfo.playerBanns.NumberOfGameBans}</li>
        <li><strong>V.A.C. bans:</strong> {playerInfo.playerBanns.NumberOfVACBans}</li>
      </ul>
    </div>
  </div>
)

export default PlayerOneOk

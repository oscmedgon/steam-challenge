import React from 'react'

const PlayerOneOk = ({playerInfo}) => (
  <div className='container info'>
    <div className='col-xs-12'>
      <div className='col-sm-3'>
        <img src={playerInfo.playerInfo.avatarfull} className='img-responsive img-circle' alt='playerImg' />
      </div>
      <div className='col-sm-9'>
        <h2><a href={playerInfo.playerInfo.profileurl}>{playerInfo.playerInfo.personaname}</a></h2>
      </div>
    </div>
    <div className='col-xs-12'>
      <ul className='list-unstyled'>
        <li><strong>Username:</strong> {playerInfo.playerInfo.personaname}</li>
        <li><strong>Profile URL:</strong> {playerInfo.playerInfo.profileurl}</li>
        <li><strong>SteamID</strong> {playerInfo.playerInfo.steamid}</li>
        <li><strong>Player total games:</strong> {playerInfo.playerInfo.game_count}</li>
        {console.log(playerInfo.playerGames, 'no, yo soy player info')}
        <li><strong>Player total friends</strong> {playerInfo.playerInfo.playerFriends.friends.length}</li>
        <h3>Player bans state</h3>
        <li><strong>Comunity status:</strong> {playerInfo.playerInfo.playerBanns.CommunityBanned ? 'Banned' : 'Not banned'}</li>
        <li><strong>Economy ban status:</strong> {playerInfo.playerInfo.playerBanns.EconomyBan}</li>
        <li><strong>Game bans:</strong> {playerInfo.playerInfo.playerBanns.NumberOfGameBans}</li>
        <li><strong>V.A.C. bans:</strong> {playerInfo.playerInfo.playerBanns.NumberOfVACBans}</li>
      </ul>
    </div>
  {console.log(playerInfo)}
  </div>
)

export default PlayerOneOk

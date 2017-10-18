import React from 'react'

const PlayerOkCard = ({player}) => {
  console.log(player)
  return (
    <div className='row'>
      <div>
        <div className='col-xs-3'>
          <img className='img-responsive' src={player.playerData.avatarfull} alt='user avatar' />
        </div>
        <div className='col-xs-9'>
          <h2>{player.playerData.personaname}</h2>
        </div>
      </div>
      <div className='col-xs-12'>
        <p>
          <strong>
            Profile URL:
          </strong>
          <span>
            {player.playerData.profileurl}
          </span>
        </p>
        <p>
          <strong>
            Profile ID:
          </strong>
          <span>
            {player.playerData.steamid}
          </span>
        </p>
        <p>
          <strong>
            Profile Name:
          </strong>
          <span>
            {player.playerData.personaname}
          </span>
        </p>
      </div>
    </div>
  )

}
export default PlayerOkCard

import React from 'react'

const PlayerOkCard = ({player}) => {
  console.log(player)
  return (
    <div className='row'>
      <div>
        <div className='col-xs-4'>
          <img className='img-responsive' src={player.avatarfull} alt='user avatar' />
        </div>
        <div className='col-xs-8'>
          <h2>{player.personaname}</h2>
          <p>
          <strong>
            Profile URL:
          </strong>
          <span>
            {player.profileurl}
          </span>
        </p>
        <p>
          <strong>
            Profile ID:
          </strong>
          <span>
            {player.steamid}
          </span>
        </p>
        <p>
          <strong>
            Profile Name:
          </strong>
          <span>
            {player.personaname}
          </span>
        </p>
        </div>
      </div>
     
    </div>
  )

}
export default PlayerOkCard

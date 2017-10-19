import React from 'react'

const PlayerOkCard = ({player}) => {
  console.log(player)
  return (
    <div className='row'>
      <div>
        <div className='col-xs-3'>
          <a href={player.profileurl} target='_blank'><img className='img-responsive img-circle' src={player.avatarfull} alt='user avatar' /></a>
        </div>
        <div className='col-xs-9'>
          <h2><a href={player.profileurl} target='_blank'>{player.personaname}</a></h2>
          <p>
          <strong>
            Profile:
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

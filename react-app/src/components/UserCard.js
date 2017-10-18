import React from 'react'
import PlayerOkCard from './playerOK'

const defaultImg = 'https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png'
const UserCard = ({data}) => {
  console.log(data)
  // if( players.player1.match(/(\b\d{17}\b)/) && players.player2.match(/(\b\d{17}\b)/)) {
  //   var msg = 'TODO VA BIEN'
  // } else {
  //   var msg = 'algo va mal'
  // }
  return (
    <div className='row'>
      <div className='container'>
        <div className='col-md-6'>
          <PlayerOkCard player={data.player1} />
        </div>
        <div className='col-md-6'>
          <PlayerOkCard player={data.player2} />
        </div>
      </div>
    </div>
  )
}

export default UserCard

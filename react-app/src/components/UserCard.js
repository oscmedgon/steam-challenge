import React from 'react'
import PlayerOkCard from './playerOK'
import PlayerKoCard from './playerKO'
import GameList from './GameList'

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
        {data.player1.status==='ok'? <PlayerOkCard player={data.player1}/> : <PlayerKoCard player={data.player1} /> }
        </div>
        <div className='col-md-6'>
         {data.player2.status==='ok'? <PlayerOkCard player={data.player2}/> : <PlayerKoCard player={data.player2} /> }        </div>
      </div>
      {data.player1.status ==='ok' && data.player2.status ==='ok'? <GameList id1={data.player1.steamid}/>: <h1>No valid users</h1>}
    </div>
  )
}

export default UserCard

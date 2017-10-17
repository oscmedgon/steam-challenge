import React from 'react'

const UserCard = ({players}) => {
  if( players.player1.match(/(\b\d{17}\b)/) && players.player2.match(/(\b\d{17}\b)/)) {
    var msg = 'TODO VA BIEN'
  } else {
    var msg = 'algo va mal'
  }
  return (
    <h1>{msg}</h1>
  )
}

export default UserCard

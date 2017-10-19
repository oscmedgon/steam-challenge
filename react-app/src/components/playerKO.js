import React from 'react'

const PlayerKoCard = ({player}) => {
  return (
    <div>
      <h1 className='alert alert-danger'>Error searching user</h1>
      <p>The user: {player.input} doesn't exist. Please enter a valid user, or make sure the profile is not private </p>
    </div>
  )
}
export default PlayerKoCard

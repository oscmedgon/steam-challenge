import React from 'react'

import InfoP1 from './InfoP1'

const PlayerOneNok = ({userInput}) => (
  <div className='container info'>
    <h2>Invalid vanity URL or steamID</h2>
    <p>Something went wrong this the user: {userInput} returned an error, please meke sure you are using a valid vanity url or steamId: for more information follow our gide bellow</p>
    <InfoP1 />
  </div>
)

export default PlayerOneNok

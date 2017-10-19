import React, {Component} from 'react'

import PlayerCard from './PlayerCard'
import Info from './InfoP1'
import PlayerSearch from './PlayerSearch'
import Navbar from './Navigation'

class PlayerInfo extends Component {
  constructor () {
    super()
    this.state = {
      playerInfo: {},
      status: 'pend'
    }
    this.updateState = this.updateState.bind(this)
  }
  updateState (playerInfo, status) {
    this.setState({
      playerInfo: playerInfo,
      status: status
    })
  }
  render () {
    return (
      <div>
        <Navbar />
        <PlayerSearch updateMain={this.updateState} />
        {this.state.status === 'pend' ? <div className='info container'><Info /></div> : <PlayerCard userInput={this.state} />}
      </div>
    )
  }
}

export default PlayerInfo

import React, {Component} from 'react'

import {playerCheckInfo} from '../utils/utils'
import PlayerOneNok from './PlayerOneNok'
import PlayerOneOk from './PlayerOneOk'

class PlayerCard extends Component {
  constructor () {
    super()
    this.state = {
      playerInfo: {},
      status: 'pend'
    }
    this.statusUpdater = this.statusUpdater.bind(this)
  }
  statusUpdater (playerInfo, status) {
    this.setState({
      playerInfo: playerInfo,
      status: status
    })
  }
  componentWillMount () {
    playerCheckInfo(this.props.userInput.playerInfo.input, this.statusUpdater)
  }
  componentWillReceiveProps (props) {
    playerCheckInfo(props.userInput.playerInfo.input, this.statusUpdater)
  }
  render () {
    return (
      <div className='gameInfo'>
        {this.state.status === 'ok' ? <PlayerOneOk playerInfo={this.state.playerInfo} /> : <PlayerOneNok playerInput={this.props.userInput.playerInfo.input} />}
      </div>

    )
  }
}

export default PlayerCard

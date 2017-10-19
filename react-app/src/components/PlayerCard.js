import React, {Component} from 'react'

import {playerCheckInfo} from '../utils/utils'

class PlayerCard extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {},
      status: 'pend'
    }
    this.statusUpdater = this.statusUpdater.bind(this)
  }
  statusUpdater (userInfo, status) {
    this.setState({
      userInfo: userInfo,
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
    console.log(this.state)
    return (
      <div>
        <h1>Hey!!! que pasa {this.props.userInput.playerInfo.input}</h1>
        {this.state.status === 'ok' ? 'todo OK' : 'Algo ha ido mal'}
      </div>

    )
  }
}

export default PlayerCard

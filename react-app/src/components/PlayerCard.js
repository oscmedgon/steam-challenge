import React, {Component} from 'react'

import {playerCheckInfo} from '../utils/utils'

class PlayerCard extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {},
      userBans: {},
      userGames: {}
    }
  }
  componentWillMount () {
    playerCheckInfo(this.props.userInput.playerInfo.input)
  }
  componentWillReceiveProps (props) {
    playerCheckInfo(props.userInput.playerInfo.input)
  }
  render () {
    return (
      <h1>Hey!!! que pasa {this.props.userInput.playerInfo.input}</h1>
    )
  }
}

export default PlayerCard

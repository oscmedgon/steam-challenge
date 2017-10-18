import React, {Component} from 'react'
import {getGamesList} from '../utils/utils'
import MatchedList from './MatchedList'

class GameList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      MatchedGames: []
    }
    this.updateGameList = this.updateGameList.bind(this)
  }
  componentWillMount () {
    getGamesList(this.props.id1, this.props.id2, this.updateGameList)
  }
  componentWillReceiveProps (props) {
    getGamesList(props.id1, props.id2, this.updateGameList)
  }
  updateGameList (GameMatch) {
    this.setState({MatchedGames: GameMatch})
  }
  render () {
    return (
      <div className='container'>
				<ul className='list-unstyled row'>
					<MatchedList MatchedGames={this.state.MatchedGames} />
				</ul>
      </div>
    )
  }
}
export default GameList

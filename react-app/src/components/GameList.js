import React,{Component} from 'react'
import {getGamesList} from '../utils/utils'

class GameList extends Component{
	constructor(props){
		super(props)
		this.state = {
			MatchedGames: [ ]
		}
		this.updateGameList = this.updateGameList.bind(this)
	}
	componentWillMount () {
		getGamesList(this.props.id1, this.props.id2, this.updateGameList)
	}
	componentWillReceiveProps (props) {
		getGamesList(props.id1, props.id2, this.updateGameList)
	}
	function updateGameList (GameMatch) {
		getGamesList (this.setState(function () {
			MatchedGames: GameMatch
		})
	}
render(){
	return (
		<div className='container'>
			<h1> Todo sta bien</h1>
		</div>
		)
	}
}
export default GameList

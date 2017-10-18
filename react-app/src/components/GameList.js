import React,{Component} from 'react'
import {getGamesList} from '../utils/utils'

class GameList extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount() {
		getGamesList(this.props.id1)
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

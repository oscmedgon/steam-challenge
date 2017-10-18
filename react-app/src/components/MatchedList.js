import React,{Component} from 'react'
import {getGameInfo} from './../services/steamApi'

/*
constructor() {
  super()

  this.state = {
    games: []
  }
}

componentWillMount() {
  const games = []

  const calls = this.props.MatchedGames.map(function(game) {
    return "ajax-call-api".getGameInfo(game.appId)
         .then(function(game) {
           games.push(game)
       })
  })

  Promise.all(calls)
  .then(() => {
      this.setState({games})

  })
}

render() {
  // TODO use state games to fullfill games information
}



*/
class MatchedList extends Component {
  constructor(props){
    super(props)
    this.state = {
      games : []
    }
  }

  componentWillReceiveProps (props) {
    const games = []
    const calls = props.MatchedGames.map(function (game) {
      return getGameInfo(game.appid)
           .then(function (game) {
             console.log('game info', game)
             games.push(game.data.game)
           })
    })
    Promise.all(calls)
    .then(() => {
        this.setState({
          games: games
        })

    })
  }
  render () {
    return this.state.games.map(function(game,i){
      return <li className='col-sm-6 col-md-4' key={i}>{game.gameName}</li>
    })
  }
}

export default MatchedList

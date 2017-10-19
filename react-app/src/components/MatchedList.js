import React, {Component} from 'react'
import {getGameInfo} from './../services/steamApi'

class MatchedList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      games: []
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
    }
  )
  }
  render () {
    return (

        this.state.games.filter((obj) => {
          console.log(obj.gameName)
          return obj.gameName !== undefined && !obj.gameName.includes('ValveTestApp') && obj.gameName !== ''
        }).map(function (game, i) {
          return <li className='col-sm-6 col-md-4' key={i}>{game.gameName}</li>
        })

    )
  }
}

export default MatchedList

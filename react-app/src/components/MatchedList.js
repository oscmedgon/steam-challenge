import React, {Component} from 'react'
import {getGameInfo} from './../services/steamApi'

class MatchedList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      games: []
    }
  }
  componentWillMount () {
    this.setState({
      loading: true,
      games: []
    })
    const games = []
    const calls = this.props.MatchedGames.map(function (game) {
      return getGameInfo(game.appid)
           .then(function (game) {
             games.push(game.data.game)
           })
    })
    Promise.all(calls)
    .then(() => {
      this.setState({
        loading: false,
        games: games
      })
    }
  )
}
  componentWillReceiveProps (props) {
    this.setState({
      loading: true,
      games: []
    })
    const games = []
    const calls = props.MatchedGames.map(function (game) {
      return getGameInfo(game.appid)
           .then(function (game) {
             games.push(game.data.game)
           })
    })
    Promise.all(calls)
    .then(() => {
      this.setState({
        loading: false,
        games: games
      })
    }
  )
  }
  render () {
    if (this.state.loading) {
      return (
        <div>
        <h4 className='loadingTitle'>Este proceso puede tardar bastante dependiendo de la cantidad de juegos que tengan los jugadores</h4>
          <div className="loader">
            <img src="../img/loading2.gif"  width="150px"/>
          </div>
        </div>
        )
    } else {
      return (
        this.state.games.filter((obj) => {
          return obj.gameName !== undefined && !obj.gameName.includes('ValveTestApp') && obj.gameName !== ''
        }).map(function (game, i) {
          return <li className='col-sm-6 col-md-4' key={i}>{game.gameName}</li>
        })
      )
    }
  }
}

export default MatchedList

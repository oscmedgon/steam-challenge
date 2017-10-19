import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import PlayerInfo from './PlayerInfo'
import SelectPlayers from './SelectPlayers'
import SelectGame from './SelectGame'
import BattleResult from './BattleResult'

class App extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/player_info' component={PlayerInfo} />
          <Route path='/select_players' component={SelectPlayers} />
          <Route path='/select_game' component={SelectGame} />
          <Route path='/battle_results' component={BattleResult} />
        </Switch>
      </main>
    )
  }
}

export default App

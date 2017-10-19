import React, {Component} from 'react'
import Navbar from './Navigation'
import {checkUser} from '../utils/utils'
import UserCard from './UserCard'
import Info from './Info'
import './SelectPlayers.css'

class SelectPlayers extends Component {
  constructor () {
    super()
    this.state = {
      player1: {
        input: 'undertakertfk',
        status: 'pend'
      },
      player2: {
        input: 'jaxalbert',
        status: 'pend'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    const input = e.target.value
    const player = e.currentTarget.dataset.id

    this.setState(function (prevState) {
      prevState[player].input = input
      return prevState
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    const players = {}

    const check1 = checkUser(this.state.player1.input)
        .then(function (res) {
          players.player1 = res
        })

    const check2 = checkUser(this.state.player2.input)
        .then(function (res) {
          players.player2 = res
        })

    Promise.all([check1, check2])
        .then(() => {
          this.setPlayers(players.player1, players.player2)
        })
  }

  setPlayers (player1, player2) {
    this.setState({
      player1,
      player2
    })
  }

  render () {
    return (
      <div className= "mainBody">
        <div className='container'>
<<<<<<< HEAD
          <div className='pageLogo'>
            <img src="./img/logoescudo.png" width='200px' alt='logo'/>
          </div>
=======
        <div className='row'>
>>>>>>> 7b9ae3d468d17f9a0ff7bdf6e170570f4ddcd271
          <div className='row'>
            <img src='../img/logo.png'/>
          </div>
            <form onSubmit={this.handleSubmit}>
              <div className='col-sm-5'>
                <input onChange={this.handleChange} value={this.state.player1.input} data-id='player1' className='form-control imput-lg' type='text' required />
              </div>
              <div className='col-sm-2'>
                <button>-VS-</button>
              </div>
              <div className='col-sm-5'>
                <input onChange={this.handleChange} value={this.state.player2.input} data-id='player2' className='form-control imput-lg' type='text' required />
              </div>
            </form>
          </div>
        </div>
        {this.state.player1.status !== 'pend' && this.state.player2.status !== 'pend' && <UserCard data={this.state} /> || <Info />}
      </div>
    )
  }
}

//

export default SelectPlayers

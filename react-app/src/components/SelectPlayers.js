import React, {Component} from 'react'
import Navbar from './Navigation'
import {checkUser} from '../utils/utils'
import UserCard from './UserCard'
import Info from './Info'
import './SelectPlayers.css'

class SelectPlayers extends Component {
  constructor () {
    super()
    this.fakePlayer1 = {
      player1: {
        input: '',
        status: 'pend'
      }
    }
    this.fakePlayer2 = {
      player2: {
        input: '',
        status: 'pend'
      }
    }

    this.state = {
      player1: {
        input: '',
        status: 'pend'
      },
      player2: {
        input: '',
        status: 'pend'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    const input = e.target.value
    const player = e.currentTarget.dataset.id
    if (player === 'player1'){
      this.fakePlayer1 = {
        player1: {
          input: input,
          status: 'pend'
        }
      }
    } else if (player === 'player2'){
      this.fakePlayer2 = {
        player2: {
          input: input,
          status: 'pend'
        }
      }
    }
  }

  handleSubmit (e) {
    this.setState({
      player1: this.fakePlayer1,
      player2: this.fakePlayer2
    })
    e.preventDefault()
    console.log(this.state)
    const players = {}

    const check1 = checkUser(this.fakePlayer1.player1.input)
        .then(function (res) {
          players.player1 = res
        })

    const check2 = checkUser(this.fakePlayer2.player2.input)
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
          <div className='pageLogo'>
            <img src="./img/logoescudo.png" width='200px' alt='logo'/>
          </div>
            <form className='formusrsrch' onSubmit={this.handleSubmit}>
              <div className='col-sm-5'>
                <input onChange={this.handleChange} data-id='player1' className='form-control imput-lg' type='text' required />
              </div>
              <div className='col-sm-2'>
                <button className='col-xs-8 col-xs-offset-2 fight'>F I G H T !</button>
              </div>
              <div className='col-sm-5'>
                <input onChange={this.handleChange} data-id='player2' className='form-control imput-lg' type='text' required />
              </div>
            </form>
          </div>
        {this.state.player1.status !== 'pend' && this.state.player2.status !== 'pend' && <UserCard data={this.state} /> || <Info />}
      </div>
    )
  }
}

//

export default SelectPlayers

import React, {Component} from 'react'
import Navbar from './Navigation'
import {dataType} from '../utils/utils'
import UserCard from './UserCard'

class SelectPlayers extends Component {
  constructor() {
    super()
    this.state = {
      player1: {
        input: '',
        id: '',
        status: 'pend'
      },
      player2: {
        input: '',
        id: '',
        status: 'pend'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
  }
  handleChange(e) {
    const input = e.target.value
    const player = e.currentTarget.dataset.id

    this.setState(function(prevState) {
         prevState[player].input = input

         return prevState
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(dataType(this.state.player1.input))
    console.log(dataType(this.state.player2.input))
  }
  changeStatus(id, status, player) {
    this.setState({
      //
      [player]: {
        id: id,
        status: status
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className='container'>
          <div className='row'>
            <form onSubmit={this.handleSubmit}>
              <div className='col-sm-5'>
                <input onChange={this.handleChange} value={this.state.player1.input} data-id='player1' className='form-control imput-lg' type='text' required/>
              </div>
              <div className='col-sm-2'>
                <button>-VS-</button>
              </div>
              <div className='col-sm-5'>
                <input onChange={this.handleChange} value={this.state.player2.input} data-id='player2' className='form-control imput-lg' type='text' required/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectPlayers

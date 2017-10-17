import React, {Component} from 'react'
import Navbar from './Navigation'
import {dataType} from '../utils/utils'

class SelectPlayers extends Component {
  constructor () {
    super()
    this.state = {
      player1: '',
      player2: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    if (e.currentTarget.dataset.id === 'player1') {
      this.setState({
        player1: e.target.value
      })
    } else if (e.currentTarget.dataset.id === 'player2') {
      this.setState({
        player2: e.target.value
      })
    }
  }

handleSubmit (e){
e.preventDefault()
    dataType(this.state.player1).then(function (data){
          console.log(data)
        })
    dataType(this.state.player2).then(function (data){
          console.log(data)
        })
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
          <form onSubmit= {this.handleSubmit}>
              <div className='col-sm-5'>
                <input onChange={this.handleChange} value={this.state.player1} data-id='player1' className='form-control imput-lg' type='text' />
              </div>
              <div className='col-sm-2'>
                <button>-VS-</button>
              </div>
              <div className='col-sm-5'>
                <input onChange={this.handleChange} value={this.state.player2} data-id='player2' className='form-control imput-lg' type='text' />
              </div>
            </form>
        </div>
      </div>
    </div>
    )
  }
}

export default SelectPlayers

import React, {Component} from 'react'

import Navbar from './Navigation'

class SelectPlayers extends Component {
  constructor () {
    super()
    this.state = {
      player1: '',
      player2: ''
    }
    this.handleChange = this.handleChange.bind(this)
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

  render () {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <input onChange={this.handleChange} value={this.state.player1} data-id='player1' className='form-control imput-lg' type='text' />
            </div>
            <div className='col-sm-2'>
              <button>-VS-</button>
            </div>
            <div className='col-sm-5'>
              <input onChange={this.handleChange} value={this.state.player2} data-id='player2' className='form-control imput-lg' type='text' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectPlayers

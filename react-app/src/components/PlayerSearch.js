import React, {Component} from 'react'

class PlayerSearch extends Component{
  constructor () {
    super()
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.updateMain({input: this.state.input.toLowerCase()}, 'ok')
  }
  render () {
    return (
      <div className='container' >
        <form onSubmit={this.handleSubmit}>
          <input className='form-control input-lg' type='text' onChange={this.handleChange} value={this.state.input} placeholder='Search your steam account' />
        </form>
      </div>
    )
  }
}

export default PlayerSearch

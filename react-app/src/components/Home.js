import React from 'react'
import {Link} from 'react-router-dom'

import './Home.css'

const Home = props => (
  <section className='container bghome'>
    <header className='pageLogo'>
      <img src='./img/logoescudo.png' width='100px' alt='logo'/>
    </header>
    <div className='row'>
      <Link to='/player_info'>
        <div className='col-xs-6 buttons'>
          <img src='./img/one.png' className='img-responsive' alt='img1' />
          <h3 className='players'> 1 PLAYER</h3>
        </div>
      </Link>
      <Link to='/select_players'>
        <div className='col-xs-6 buttons'>
          <img src='./img/duel.png' className='img-responsive' alt='img2' />
          <h3 className='players'>2 PLAYERS</h3>
        </div>
      </Link>

    </div>
  </section>
)

export default Home

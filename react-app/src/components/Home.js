import React from 'react'
import './Home.css' 


const Home = props => (
  <section className="container">  
	<header >
	  <img src='./img/logo.png' alt="logo"/>
	</header>
	<div className="row">
		<div className="col-xs-3 buttons">
			<img src="./img/1p.png" className="img-responsive"   alt="img1"/>
			<h3 className ="players"> 1 PLAYER</h3>
		</div>
		<div className="col-xs-6 col-xs-offset-2 buttons">
			<img src="./img/2p.png"  className="img-responsive"  alt="img2"/>
			<h3 className= "players">2 PLAYERS</h3>
		</div>

	</div>
  </section>
)

export default Home

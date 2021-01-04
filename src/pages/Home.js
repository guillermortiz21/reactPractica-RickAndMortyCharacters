import React from 'react';
import logo  from '../images/logo.png';
import './styles/Home.css';

function Home(){
  return(
    <div className="Home">
      <img className="Logo" src={logo} alt="Rick and Morty"/>
    </div>
  );
}

export default Home;
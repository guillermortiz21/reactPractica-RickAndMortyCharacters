import React from 'react';
import './styles/CharacterCard.css';

function CharacterCard(props){
  return(
    <div className="CharacterCard">
      <img className="" src={props.image} alt={props.name}/>
      <p className="CharacterName">{props.name}</p>
    </div>
  );
}

export default CharacterCard;
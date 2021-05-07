import React from 'react';
import './Pokecard.css';

function Pokecard(props) {
  return (
    <div className="pokecard">
      <h1 className="pokecard-name">{props.name}</h1>
      <img className="pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=""/>
      <p className="pokecard-type">Type: {props.type}</p>
      <p className="pokecard-exp">EXP: {props.base_experience}</p>
    </div>
  );
}

export default Pokecard;
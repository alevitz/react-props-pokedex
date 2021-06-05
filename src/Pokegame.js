import React from 'react';
import './App.css';
import Pokedex from './Pokedex';

function Pokegame(props) {
  
  let pokeArr = props.pokemon.slice();

  for(let i = pokeArr.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let temp = pokeArr[i];
    pokeArr[i] = pokeArr[j];
    pokeArr[j] = temp;
  }

  let hand1 = pokeArr.slice(0,4);
  let hand2 = pokeArr.slice(4);

  let total_exp_hand1 = 0;
  let total_exp_hand2 = 0;

  for(let p of hand1){
    total_exp_hand1 += p.base_experience;
  }
  for(let p of hand2){
    total_exp_hand2 += p.base_experience;
  }

  

  return (
    total_exp_hand1 > total_exp_hand2 ? 
    <div>
    <Pokedex pokemon={hand1} total_exp={total_exp_hand1} isWinner={true}/>
    <Pokedex pokemon={hand2} total_exp={total_exp_hand2}/>
    </div>
    :
    <div>
    <Pokedex pokemon={hand1} total_exp={total_exp_hand1}/>
    <Pokedex pokemon={hand2} total_exp={total_exp_hand2} isWinner={true}/>
    </div>
    
  );
}

Pokegame.defaultProps = {
  pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
}

export default Pokegame;
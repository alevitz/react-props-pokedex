import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
  return (
    <div>
      {props.pokemon.map(p => (        
       <Pokecard 
       key={p.id}
       id={p.id}
       name={p.name} 
       type={p.type} 
       base_experience={p.base_experience}                 
       />       
      ))}
      {props.isWinner ? <div>This hand wins!!!!</div> : null}
      <div>Total Exp: {props.total_exp}</div>
      </div>
  );
} 

export default Pokedex;


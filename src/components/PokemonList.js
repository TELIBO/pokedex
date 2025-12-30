// Component to display list of all Pokemon
import React from 'react';
import './PokemonList.css';

function PokemonList({ pokedex, pokemonStart, pokemonEnd, onPokemonSelect, selectedId }) {
  // Generate array of pokemon IDs
  const pokemonIds = [];
  for (let i = pokemonStart; i <= pokemonEnd; i++) {
    if (pokedex[i]) {
      pokemonIds.push(i);
    }
  }

  return (
    <div className="pokemon-list">
      {pokemonIds.map((id) => (
        <div
          key={id}
          className={`pokemon-name ${selectedId === id ? 'selected' : ''}`}
          onClick={() => onPokemonSelect(id)}
        >
          {id}. {pokedex[id].name.toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default PokemonList;

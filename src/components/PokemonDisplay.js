// Component to display selected Pokemon details
import React from 'react';
import './PokemonDisplay.css';

function PokemonDisplay({ pokemon, loading }) {
  if (loading) {
    return (
      <div className="pokemon-display">
        <div className="loading">Loading Pokemon...</div>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="pokemon-display">
        <div className="no-pokemon">Select a Pokemon</div>
      </div>
    );
  }

  return (
    <div className="pokemon-display">
      {/* Pokemon Image */}
      <img 
        src={pokemon.image} 
        alt={pokemon.name}
        className="pokemon-image"
      />

      {/* Pokemon Types */}
      <div className="pokemon-types">
        {pokemon.types.map((typeInfo, index) => (
          <span 
            key={index}
            className={`type-box ${typeInfo.type.name}`}
          >
            {typeInfo.type.name.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Pokemon Description */}
      <div className="pokemon-description">
        {pokemon.description}
      </div>
    </div>
  );
}

export default PokemonDisplay;

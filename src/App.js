// Main App Component - Manages all state and API calls
import React, { useState, useEffect } from 'react';
import PokemonDisplay from './components/PokemonDisplay';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import RegionButtons from './components/RegionButtons';
import './App.css';

function App() {
  // State management
  const [pokedex, setPokedex] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonStart, setPokemonStart] = useState(1);
  const [pokemonEnd, setPokemonEnd] = useState(151);
  const [loading, setLoading] = useState(true);

  // Load pokemon when region changes
  useEffect(() => {
    loadAllPokemon();
  }, [pokemonStart, pokemonEnd]);

  // Function to fetch single pokemon data
  const fetchPokemon = async (num) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
      const response = await fetch(url);
      const data = await response.json();

      // Get pokemon description
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();
      const description = speciesData.flavor_text_entries
        .find(entry => entry.language.name === 'en')?.flavor_text || 'No description available';

      return {
        id: num,
        name: data.name,
        types: data.types,
        image: data.sprites.front_default,
        description: description
      };
    } catch (error) {
      console.error('Error fetching pokemon:', error);
      return null;
    }
  };

  // Load all pokemon for current region
  const loadAllPokemon = async () => {
    setLoading(true);
    const pokemonData = {};
    
    // Create array of promises to fetch all pokemon
    const promises = [];
    for (let i = pokemonStart; i <= pokemonEnd; i++) {
      promises.push(fetchPokemon(i));
    }

    // Wait for all pokemon to be fetched
    const results = await Promise.all(promises);
    
    // Store in object with id as key
    results.forEach(pokemon => {
      if (pokemon) {
        pokemonData[pokemon.id] = pokemon;
      }
    });

    setPokedex(pokemonData);
    setSelectedPokemon(pokemonData[pokemonStart]); // Show first pokemon
    setLoading(false);
  };

  // Handle region button click
  const handleRegionChange = (start, end) => {
    setPokemonStart(start);
    setPokemonEnd(end);
  };

  // Handle pokemon selection from list
  const handlePokemonSelect = (id) => {
    setSelectedPokemon(pokedex[id]);
  };

  // Handle search
  const handleSearch = (searchTerm) => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    // Find pokemon by name
    for (let i = pokemonStart; i <= pokemonEnd; i++) {
      if (pokedex[i] && pokedex[i].name.toLowerCase() === normalizedSearch) {
        setSelectedPokemon(pokedex[i]);
        return true;
      }
    }
    return false;
  };

  return (
    <div className="App">
      <div className="header">
        <img src={process.env.PUBLIC_URL + "/Pokédex_logo.png"} alt="Pokedex Logo" className="logo" />
      </div>
      
      <div className="main-container">
        <div className="content-box">
          {/* Left side - Pokemon details */}
          <div className="pokemon-info-section">
            <PokemonDisplay pokemon={selectedPokemon} loading={loading} />
            <SearchBar onSearch={handleSearch} />
            <RegionButtons onRegionChange={handleRegionChange} />
          </div>

          {/* Right side - Pokemon list */}
          <PokemonList 
            pokedex={pokedex}
            pokemonStart={pokemonStart}
            pokemonEnd={pokemonEnd}
            onPokemonSelect={handlePokemonSelect}
            selectedId={selectedPokemon?.id}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

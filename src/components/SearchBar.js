// Search Bar Component
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      alert('Please enter a Pokemon name');
      return;
    }

    const found = onSearch(searchTerm);
    
    if (!found) {
      alert('Pokémon not found!');
    } else {
      setSearchTerm(''); // Clear input after successful search
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search-button">
        GO
      </button>
    </form>
  );
}

export default SearchBar;

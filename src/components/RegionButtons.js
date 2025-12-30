// Region Selection Buttons Component
import React from 'react';
import './RegionButtons.css';

function RegionButtons({ onRegionChange }) {
  const regions = [
    { name: 'KANTO', start: 1, end: 151 },
    { name: 'JOHTO', start: 152, end: 251 },
    { name: 'HOENN', start: 252, end: 386 },
    { name: 'SINNOH', start: 387, end: 493 }
  ];

  return (
    <div className="region-buttons">
      {regions.map((region) => (
        <button
          key={region.name}
          className="region-button"
          onClick={() => onRegionChange(region.start, region.end)}
        >
          {region.name}
        </button>
      ))}
    </div>
  );
}

export default RegionButtons;

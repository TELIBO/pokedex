Pokédex
This project is a web-based Pokédex application that allows users to view information about Pokémon from different regions. Users can select a region to load a list of Pokémon and view detailed information about each Pokémon, including its image, types, and description.

Features
Load Pokémon data from the PokéAPI.
Display Pokémon names, images, types, and descriptions.
Filter Pokémon by regions: Kanto, Johto, Hoenn, Sinnoh, and Unova.
Search for a specific Pokémon by name.
Technologies Used
HTML
CSS
JavaScript
PokéAPI
Getting Started
To get a local copy up and running, follow these steps.

Prerequisites
You need a modern web browser to run this project.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/pokedex.git
Open the index.html file in your web browser.

Usage
Load Pokémon Data: When you open the application, it will load the Pokémon data for the Kanto region by default.

View Pokémon Details: Click on a Pokémon's name from the list to view its image, types, and description.

Switch Regions: Click on one of the region buttons (KANTO, JOHTO, HOENN, SINNOH, UNOVA) to load Pokémon from that region.

Search Pokémon: Enter a Pokémon name in the input box and click the "Submit" button to search for a specific Pokémon.

Code Explanation
HTML Structure
The HTML file contains buttons for switching between regions, an input field for searching Pokémon, and sections for displaying the Pokémon list and details.

html
Copy code
<button id="kanto">KANTO</button>
<button id="johto">JOHTO</button>
<br>
<button id="hoenn">HOENN</button>
<button id="sinnoh">SINNOH</button>
<button id="unova">UNOVA</button>
<div id="pokemon-list"></div>
<img id="pokemon-img" src="" alt="Pokemon Image">
<div id="pokemon-types"></div>
<p id="pokemon-description"></p>
<input type="text" id="input" placeholder="Enter Pokémon name">
<button id="submit">Submit</button>
JavaScript Functionality
The script.js file contains all the logic for fetching data from the PokéAPI, updating the DOM, and handling user interactions.

Main Functions
loadAllPokemon: Fetches and loads all Pokémon data for the selected region.
reloadPokemon: Clears the current Pokémon list and reloads it for the selected region.
getpokemon: Fetches data for a single Pokémon from the PokéAPI.
renderPokemonList: Renders the list of Pokémon on the page.
updatefunction: Updates the Pokémon details section when a Pokémon name is clicked.
updatePokemonInfoById: Updates the Pokémon image, types, and description based on the Pokémon ID.
updatePokemonInfo: Searches for a Pokémon by name and updates the details if found.
addEventListeners: Adds event listeners to the region buttons and search button.
Event Handling
Event listeners are added to the region buttons and the search button to handle user interactions and update the Pokémon data displayed.

javascript
Copy code
window.onload = async function () {
    await loadAllPokemon();
    document.getElementById("pokemon-description").textContent = pokedex[1] ? pokedex[1]['pokemondescription'] : "";
    document.getElementById("kanto").onclick = async function() {
        pokemonstart = 1;
        pokemonend = 151;
        await reloadPokemon();
        updatePokemonInfoById(1);
    }
    document.getElementById("johto").onclick = async function() {
        pokemonstart = 152;
        pokemonend = 251;
        await reloadPokemon();
        updatePokemonInfoById(152);
    }
    document.getElementById("hoenn").onclick = async function() {
        pokemonstart = 252;
        pokemonend = 386;
        await reloadPokemon();
        updatePokemonInfoById(252);
    }
    document.getElementById("sinnoh").onclick = async function() {
        pokemonstart = 387;
        pokemonend = 493;
        await reloadPokemon();
        updatePokemonInfoById(387);
    }
    document.getElementById("unova").onclick = async function() {
        pokemonstart = 494;
        pokemonend = 649;
        await reloadPokemon();
        updatePokemonInfoById(494);
    }
}

addEventListeners();
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
Distributed under the MIT License. See LICENSE for more information.

Contact
Your Name - sanjay24281803@gmail.com

Project Link:https://telibo.github.io/pokedex/

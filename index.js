var pokemonstart = 1;
var pokemonend = 151;
var pokedex = [];

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
    document.getElementById("hoen").onclick = async function() {
        pokemonstart = 252;
        pokemonend = 386;
        await reloadPokemon();
        updatePokemonInfoById(252);
    }
    document.getElementById("sinoh").onclick = async function() {
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

const loadAllPokemon = async function () {
    let pokemonPromises = [];
    for (let i = pokemonstart; i <= pokemonend; i++) {
        pokemonPromises.push(getpokemon(i));
    }
    await Promise.all(pokemonPromises);
    renderPokemonList();
}

const reloadPokemon = async function () {
    pokedex = [];
    document.querySelector("#pokemon-list").innerHTML = "";
    await loadAllPokemon();
}

const getpokemon = async function (num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + String(num);
    let response = await fetch(url);
    let data = await response.json();
    let name = data["name"];
    let types = data["types"];
    let pokemonimg = data["sprites"]["front_default"];
    response = await fetch(data["species"]["url"]);
    let pokedesc = await response.json();
    pokedesc = pokedesc["flavor_text_entries"].find(entry => entry.language.name === "en").flavor_text;
    pokedex[num] = {
        "pokemonname": name,
        "pokemontype": types,
        "pokemonimage": pokemonimg,
        "pokemondescription": pokedesc
    };
}

const renderPokemonList = function () {
    for (let i = pokemonstart; i <= pokemonend; i++) {
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.style.cursor = 'pointer';
        pokemon.addEventListener('click', updatefunction);
        pokemon.innerText = String(i) + ". " + pokedex[i]["pokemonname"].toUpperCase();
        pokemon.classList.add("pokemon-name");
        document.querySelector("#pokemon-list").append(pokemon);
    }
}

function updatefunction() {
    updatePokemonInfoById(this.id);
}

function updatePokemonInfoById(id) {
    document.getElementById("pokemon-img").src = pokedex[id]['pokemonimage'];
    let typesdiv = document.getElementById('pokemon-types');
    while (typesdiv.firstChild) {
        typesdiv.firstChild.remove();
    }
    let types = pokedex[id]["pokemontype"];
    types.forEach(typeInfo => {
        let type = document.createElement("span");
        type.textContent = typeInfo["type"]["name"].toUpperCase();
        type.classList.add("type-box", typeInfo["type"]["name"]);
        typesdiv.append(type);
    });
    document.getElementById("pokemon-description").textContent = pokedex[id]["pokemondescription"];
}

function updatePokemonInfo(e) {
    e.preventDefault();
    const inputValue = document.getElementById("input").value.toLowerCase();
    let found = false;
    for (let i = pokemonstart; i <= pokemonend; i++) {
        if (pokedex[i] && inputValue === pokedex[i].pokemonname.toLowerCase()) {
            updatePokemonInfoById(i);
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Pokémon not found!");
    }
}

function addEventListeners() {
    const submitButton = document.getElementById("submit");
    submitButton.removeEventListener("click", updatePokemonInfo);
    submitButton.removeEventListener("touchend", updatePokemonInfo);
    submitButton.addEventListener("click", updatePokemonInfo);
    submitButton.addEventListener("touchend", function(e) {
        e.preventDefault();
        updatePokemonInfo(e);
    });
}

addEventListeners();

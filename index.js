var pokemonstart = 1;
var pokemonend = 151;
var pokedex = [];

window.onload = async function () {
    await loadAllPokemon();
    document.getElementById("pokemon-description").textContent = pokedex[1] ? pokedex[1]['pokemondescription'] : "";
    document.getElementById("kanto").onclick = async function(){
        pokemonstart = 1;
        pokemonend = 152;
        await reloadPokemon();
        document.getElementById("pokemon-img").src = pokedex[1]['pokemonimage'];
        document.getElementById("pokemon-description").textContent = pokedex[1]['pokemondescription'];
    }
    document.getElementById("johto").onclick = async function(){
        pokemonstart = 152;
        pokemonend = 251;
        await reloadPokemon();
        document.getElementById("pokemon-img").src = pokedex[152]['pokemonimage'];
        document.getElementById("pokemon-description").textContent = pokedex[152]['pokemondescription'];
    }
    document.getElementById("hoen").onclick = async function(){
        pokemonstart = 252;
        pokemonend = 386;
        await reloadPokemon();
        document.getElementById("pokemon-img").src = pokedex[252]['pokemonimage'];
        document.getElementById("pokemon-description").textContent = pokedex[252]['pokemondescription'];
    }
    document.getElementById("sinoh").onclick = async function(){
        pokemonstart = 387;
        pokemonend = 493;
        await reloadPokemon();
        document.getElementById("pokemon-img").src = pokedex[387]['pokemonimage'];
        document.getElementById("pokemon-description").textContent = pokedex[387]['pokemondescription'];
    }
    document.getElementById("unova").onclick = async function(){
        pokemonstart = 494;
        pokemonend = 549;
        await reloadPokemon();
        document.getElementById("pokemon-img").src = pokedex[494]['pokemonimage'];
        document.getElementById("pokemon-description").textContent = pokedex[494]['pokemondescription'];
    }
}

const loadAllPokemon = async function () {
    for (let i = pokemonstart; i <= pokemonend; i++) {
        await getpokemon(i);
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.style.cursor = 'pointer';
        pokemon.addEventListener('click', updatefunction);
        pokemon.innerText = String(i) + ". " + pokedex[i]["pokemonname"].toUpperCase();
        pokemon.classList.add("pokemon-name");
        document.querySelector("#pokemon-list").append(pokemon);
    }
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
    pokedesc = pokedesc["flavor_text_entries"][9]["flavor_text"];
    pokedex[num] = {"pokemonname": name, "pokemontype": types, "pokemonimage": pokemonimg, "pokemondescription": pokedesc};
}

function updatefunction() {
    document.getElementById("pokemon-img").src = pokedex[this.id]['pokemonimage'];
    // Clear previous entry in types
    let typesdiv = document.getElementById('pokemon-types');
    while (typesdiv.firstChild) {
        typesdiv.firstChild.remove();
    }
    // Populate
    let types = pokedex[this.id]["pokemontype"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.textContent = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); // Add background color and font color
        typesdiv.append(type);
    }
    // Description
    document.getElementById("pokemon-description").textContent = pokedex[this.id]["pokemondescription"];
}

// function updatePokemonInfo(e) {
//     e.preventDefault();
//     const inputValue = document.getElementById("input").value.toLowerCase();

//     pokedex.forEach(function(poke) {
//         if (inputValue === poke.pokemonname.toLowerCase()) {
//             // Update the image source
//             document.getElementById("pokemon-img").src = poke.pokemonimage;

//             // Clear previous entries in types
//             let typesDiv = document.getElementById('pokemon-types');
//             while (typesDiv.firstChild) {
//                 typesDiv.firstChild.remove();
//             }

//             // Populate types
//             let types = poke.pokemontype;
//             types.forEach(function(typeInfo) {
//                 let type = document.createElement("span");
//                 type.textContent = typeInfo.type.name.toUpperCase();
//                 type.classList.add("type-box", typeInfo.type.name); // Add background color and font color
//                 typesDiv.append(type);
//             });

//             // Update the description
//             document.getElementById("pokemon-description").textContent = poke.pokemondescription;
//         }
//     });
// }

// document.getElementById("submit").addEventListener("click", updatePokemonInfo);
// document.getElementById("submit").addEventListener("touchend", updatePokemonInfo);

function updatePokemonInfo(e) {
    e.preventDefault();
    const inputValue = document.getElementById("input").value.toLowerCase();

    pokedex.forEach(function(poke) {
        if (inputValue === poke.pokemonname.toLowerCase()) {
            // Update the image source
            document.getElementById("pokemon-img").src = poke.pokemonimage;

            // Clear previous entries in types
            let typesDiv = document.getElementById('pokemon-types');
            while (typesDiv.firstChild) {
                typesDiv.firstChild.remove();
            }

            // Populate types
            let types = poke.pokemontype;
            types.forEach(function(typeInfo) {
                let type = document.createElement("span");
                type.textContent = typeInfo.type.name.toUpperCase();
                type.classList.add("type-box", typeInfo.type.name); // Add background color and font color
                typesDiv.append(type);
            });

            // Update the description
            document.getElementById("pokemon-description").textContent = poke.pokemondescription;
        }
    });
}

function addEventListeners() {
    const submitButton = document.getElementById("submit");

    // Remove any existing listeners to prevent duplication
    submitButton.removeEventListener("click", updatePokemonInfo);
    submitButton.removeEventListener("touchend", updatePokemonInfo);

    // Add both click and touchend event listeners
    submitButton.addEventListener("click", updatePokemonInfo);
    submitButton.addEventListener("touchend", function(e) {
        e.preventDefault(); // Prevent touch event from also triggering click event
        updatePokemonInfo(e);
    });
}

// Initialize event listeners
addEventListeners();

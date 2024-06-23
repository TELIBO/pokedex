var pokemonstart=1;
var pokemonend=152;
var pokedex=[];
window.onload = async function () {
    await loadAllPokemon();
    document.getElementById("johto").onclick= async function(){
        pokemonstart=152;
        pokemonend=253;
        await loadAllPokemon();
        document.getElementById("pokemon-description").textContent=pokedex[152]['pokemondescription']
    }
    document.getElementById("pokemon-description").textContent=pokedex[1]['pokemondescription']
}
const loadAllPokemon = async function () {
    for (let i =pokemonstart; i <=pokemonend; i++) {
        await getpokemon(i);
        let pokemon=document.createElement("div");
        pokemon.id=i;
        pokemon.style.cursor='pointer';
        pokemon.addEventListener('click',updatefunction);
        pokemon.innerText=String(i)+". "+pokedex[i]["pokemonname"].toUpperCase();
        pokemon.classList.add("pokemon-name");
        document.querySelector("#pokemon-list").append(pokemon);
    }
}
const getpokemon= async function(num){
    let url="https://pokeapi.co/api/v2/pokemon/"+String(num);
    let response=await fetch(url);
    let data=await response.json();
    let name=data["name"];
    let types=data["types"];
    let pokemonimg=data["sprites"]["front_default"];
    response=await fetch(data["species"]["url"]);
    let pokedesc= await response.json();
    pokedesc=pokedesc["flavor_text_entries"][9]["flavor_text"];
    pokedex[num]={"pokemonname":name,"pokemontype":types,"pokemonimage":pokemonimg,"pokemondescription":pokedesc};
}
function updatefunction(){
    document.getElementById("pokemon-img").src=pokedex[this.id]['pokemonimage'];
    //clearpreviousentryintypes
    let typesdiv=document.getElementById('pokemon-types');
    while(typesdiv.firstChild){
        typesdiv.firstChild.remove();
    }
    //populate
    let types=pokedex[this.id]["pokemontype"];
    for(let i=0;i<types.length;i++){
        let type=document.createElement("span");
        type.textContent=types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]);//add background color and font color
        typesdiv.append(type);
    }
    //description
    document.getElementById("pokemon-description").textContent=pokedex[this.id]["pokemondescription"];
}
document.getElementById("submit").onclick=function(e){
    e.preventDefault();
    pokedex.forEach(function(poke){
        if(document.getElementById("input").value===poke.pokemonname)
            {
                document.getElementById("pokemon-img").src=poke.pokemonimage;
                 //clearpreviousentryintypes
                let typesdiv=document.getElementById('pokemon-types');
                while(typesdiv.firstChild){
                typesdiv.firstChild.remove();
                }
                //populate
                let types=poke.pokemontype;
                for(let i=0;i<types.length;i++){
                let type=document.createElement("span");
                type.textContent=types[i]["type"]["name"].toUpperCase();
                type.classList.add("type-box");
                type.classList.add(types[i]["type"]["name"]);//add background color and font color
                typesdiv.append(type);
                }
                //description
                document.getElementById("pokemon-description").textContent=poke.pokemondescription;
            }
            })
}

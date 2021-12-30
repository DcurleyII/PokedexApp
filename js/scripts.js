let pokemonList = [
    {name: "Bulbasaur", type: "grass, poison", height: 0.7},
    {name: "Omastar", type: "water, rock", height: 1},
    {name: "Charizard", type: "fire, flying", height: 1.7}
];

for (let i = 0; i < 4; i++){
if (pokemonList[i].legnth < 1 && pokemonList[i].legnth > 0.6){
    document.write (pokemonList[i].name + " small fry");
} else if (pokemonList[i].legnth < 2 && pokemonList[i].legnth > 1){
    document.write (pokemonList[i].name + " Whoa Big Fella");
} else {
    document.write (pokemonList[i].name + " Average Joe");
 } 
}   

let pokemonRepository = (function() {
let pokemonList = [
    {
        name: "Bulbasaur", 
        height: 0.7, 
        type: ["grass, poison"] },

    {
        name: "Omastar",
        height: 1, 
        type: ["water, rock"] },

    {
        name: "Charizard", 
        height: 1.7, 
        type: ["fire, flying"] },
        
];
})();
function myLoopFunction(user) {
    console.log(user.name + ' is ' + user.height + ' this tall.' + user.type ' is ');
  }
    pokemonList.forEach(myLoopFunction);
    {
if (pokemonList[i].length < 1 && pokemonList[i].length > 0.6){
    document.write (pokemonList[i].name + " small fry");
} else if (pokemonList[i].length < 2 && pokemonList[i].length > 1){
    document.write (pokemonList[i].name + " Whoa Big Fella");
} else {
    document.write (pokemonList[i].name + " Average Joe");
 } 
}   
let pokemonInstances = []
const pokemonSubmitForm = document.querySelector("#pokemon-search-form")

const addPokemons = pokemons => 
  pokemons.forEach(pokemon => {
    const pokemonInstance = new Pokemon(pokemon)
    pokemonInstances.push(pokemonInstance)
    pokemonInstance.addPokemon()
  })

getPokemons()
  .then(pokemons => addPokemons(pokemons))

const searchPokemon = () => {
  let searchTerm = document.querySelector("#pokemon-search-input").value.toLowerCase()
  let matches = pokemonInstances.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm))
  //clear non-matches from page
  document.querySelector("#pokemon-container").innerHTML = ""
  //add matches to page
  return matches.forEach(pokemon => pokemon.addPokemon())
}


pokemonSubmitForm.addEventListener("keyup", event => {
  event.preventDefault()
  searchPokemon()  
})
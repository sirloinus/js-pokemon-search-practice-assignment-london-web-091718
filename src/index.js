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

// const searchPokemon = () => {
//   let searchTerm = document.querySelector("#pokemon-search-input").value
//   return  pokemonInstances.filter(pokemon => pokemon.name.includes(searchTerm))
// }

const searchPokemon = () => {
  let searchTerm = document.querySelector("#pokemon-search-input").value
  let matches = pokemonInstances.filter(pokemon => pokemon.name.includes(searchTerm))
  //delete non-matches from page
  document.querySelector("#pokemon-container").innerHTML = ""
  //clear search form
  // document.querySelector("#pokemon-search-input").value = ""
  //add matches to page
  return matches.forEach(pokemon => pokemon.addPokemon())
}

pokemonSubmitForm.addEventListener("keyup", event => {
  event.preventDefault()
  searchPokemon()  
})
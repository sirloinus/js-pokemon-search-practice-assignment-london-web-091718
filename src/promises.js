const getPokemons = () => 
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())

const getPokemon = pokemon =>
    fetch(`http://localhost:3000/pokemon/${pokemon.id}`)
    .then(resp => resp.json())



<script>
	const getPokemon = async () => {
		var response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
		var result = await response.json();
		return result;
	}
	
	let pokemonPromise = getPokemon();
</script>

{#await pokemonPromise}
		<h2>Loading....</h2>
{:then pokemon}
		<h2>Pokemon: {pokemon.name}</h2>
    <h3>Height: {pokemon.height}</h3>
    <h3>Weight: {pokemon.weight}</h3>
{:catch err}
	<h2>Error while loading the data</h2>
{/await}
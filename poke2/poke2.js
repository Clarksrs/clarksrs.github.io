const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        console.log(results);
        const pokemon = results.map((result) => ({
            id: result.id,
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(' / '),
            hp: result.stats[0].base_stat,
            att: result.stats[1].base_stat,
            def: result.stats[2].base_stat,
            sat: result.stats[3].base_stat,
            sdf: result.stats[4].base_stat,
            spd: result.stats[5].base_stat,
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokemon) => `
        <li class="card">
            <img class="card-image" src="${pokemon.image}"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name} <h3>Types: ${pokemon.type}</h3></h2>
            <div class="pokemonStats">              
                <div class="a-pokemon-stat">HP:<br>${pokemon.hp}</div>
                <div class="a-pokemon-stat">Attack:<br> ${pokemon.att}</div>
                <div class="a-pokemon-stat">Defense:<br>${pokemon.def}</div>                
                <div class="a-pokemon-stat">Sp. Att:<br>${pokemon.sat}</div>
                <div class="a-pokemon-stat">Sp. Def:<br>${pokemon.sdf}</div>
                <div class="a-pokemon-stat">Speed:<br>${pokemon.spd}</div>
            </div>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

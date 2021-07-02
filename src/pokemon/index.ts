type Pokemon = {
    id: number,
    name: string,
    image: string,
    type: string,
};

type PokemonInfo = {
    name: string,
    url: string
};

const makePokemon = (
    id: number,
    name: string,
    image: string,
    type: string
): Pokemon => {
    const pokemon = {
        id,
        name,
        image,
        type,
    };

    return pokemon;
}

const url = 'https://pokeapi.co/api/v2/pokemon?offset=50&limit=5';

const renderListPokemon = (listData: PokemonInfo[]): void => {
    let listPokemon: Pokemon[] = [];
    listData.forEach(async (val: PokemonInfo) => {
        const response = await fetch(val.url);
        const info = await response.json();

        const pok = makePokemon(info.id, val.name, info.sprites.back_default, info.types[0].type.name);
        listPokemon.push(pok);
    });
}

const fetchListPokemon = async (callback: (listData: PokemonInfo[]) => void) => {
    const response = await fetch(url);
    const data = await response.json();

    callback(data.results);
}

fetchListPokemon(renderListPokemon);

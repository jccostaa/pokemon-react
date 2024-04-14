/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IListaPokemon {
    count: number
    results: Item[]
}
export interface Item {
    name: string
    url: string
}


export interface IPokemon {
    id: number;
    name: string;
    height: number;
    sprites: PokemonImage;
    abilities: any[];
    stats: any[];
}


export interface PokemonImage{
    front_default: string
}

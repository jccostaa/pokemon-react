/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PokemonModel {
    id: number;
    name: string;
    height: number;
    sprites: string;
    abilities: Habilidade[];
    stats: any[];
} 

export interface Habilidade {
    effect: string;
}
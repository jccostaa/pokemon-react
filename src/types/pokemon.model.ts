/* eslint-disable @typescript-eslint/no-explicit-any */

export interface listaPokemon{
    name: string
    url:string
}

export interface IPokemon {
    id: number;
    name: string;
    height: number;
    sprites: string;
    abilities: IHabilidade[];
    stats: any[];
} 

export interface IHabilidade {
    effect: string;
}
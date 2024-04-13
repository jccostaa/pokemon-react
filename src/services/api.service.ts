/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { IPokemon, IListaPokemon } from "../types/pokemon.model"

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export async function listarPokemons(limit:number, offset:number) {
    try {
        const result = await api.get(`/pokemon/?limit=${limit}&offset=${offset}`)
        return result.data as IListaPokemon

    } catch (error: any) {
        alert(error.toString())
        return null
    }
}

export async function buscarPokemonId(id: number) {
    try{
        const result = await api.get(`/pokemon/${id}`)

    return result.data as IPokemon
    }catch(error:any){
        alert(error.toString())
        return null
    }
}

export async function buscarPokemonUrl(url:string){
    try{
        const result = await api.get(url)

        return result.data as IPokemon
    }catch(error:any){
        alert(error.toString())
        return null
    }
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { IPokemon, listaPokemon } from "../types/pokemon.model"

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export async function listarPokemons() {
    try {
        const result = await api.get(`/pokemon`)
        return result.data.data as IPokemon[]

    } catch (error: any) {
        alert(error.toString())
        return null
    }
}

export async function buscarPokemonId(id: number) {
    try{
        const result = await api.get(`/pokemon/${id}`)

    return result.data.data as IPokemon
    }catch(error:any){
        alert(error.toString())
        return null
    }
}
import axios from "axios"

export const api = axios.create({
    baseURL:"https://pokeapi.co/api/v2/"
})

export async function listarPokemons(limit:number, offset:number) {
    try{
        const result = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
        return result.data 
    }catch(error){
        return
    }
}
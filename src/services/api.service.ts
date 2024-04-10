import axios from "axios"

export const api = axios.create({
    baseURL:"https://pokeapi.co/api/v2/"
})

export async function listarPokemons() {
    try{
        const result = await api.get(`/pokemon/?limit=20&offset=20`)
        return result.data 
    }catch(error){
        return
    }
}
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../../types/pokemon.model";
import { buscarPokemonUrl, listarPokemons } from "../../services/api.service";



export const pokemonListaThunk = createAsyncThunk('pokemons/list', async ()=>{

    const pokemonLista = await listarPokemons()

    if(!pokemonLista){
        return []
    }


    const pokemons: IPokemon[] = []

    for(const item of pokemonLista.results){
        const pokemon = await buscarPokemonUrl(item.url)

        if(pokemon !== null){
            pokemons.push(pokemon)
        }
    }

    return pokemons
})


const pokemonSlice = createSlice({
    name:"pokemons",
    initialState:[] as IPokemon[],
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(pokemonListaThunk.fulfilled, (_, action) => {
           return action.payload
        });
    }
})


export default pokemonSlice.reducer
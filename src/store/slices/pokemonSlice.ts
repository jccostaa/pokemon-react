import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../../types/pokemon.model";
import { RootState } from "./../store";
import { listarPokemons } from "../../services/api.service";


const initialState: IPokemon[] = []


export const PokemonListaThunk = createAsyncThunk('pokemons/listar', async (_, config)=>{
    const state = config.getState() as RootState

    const pokemons = state.pokemons

    if(!pokemons){
        return []
    }

    const result = await listarPokemons()

    return result
})



const pokemonSlice = createSlice({
    name:"pokemons",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(PokemonListaThunk.fulfilled,(_,action)=>{
            return action.payload
        })
    }
})


export default pokemonSlice.reducer
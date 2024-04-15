import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "./../../types/pokemon.model";
import { buscarPokemonId } from "../../services/api.service";

export const pokemonThunk = createAsyncThunk("pokemon/get", async (id: number) => {
    const pokemonThunk = await buscarPokemonId(id);

    return pokemonThunk;
});

const pokemonUnicoSlice = createSlice({
    name: "personagem",
    initialState: null as IPokemon | null,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(pokemonThunk.fulfilled, (_, action) => {
            return action.payload;
            
        })
    }
})

export default pokemonUnicoSlice.reducer;
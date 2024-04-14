import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../../types/pokemon.model";


const initialState:IPokemon[] = []

const pokedexSlice = createSlice({
    name:"pokedex",
    initialState,
    reducers:{
        addPokemon:(state,action:PayloadAction<IPokemon>) => {
            return [...state, action.payload]
        }
    }
})

export const {addPokemon} = pokedexSlice.actions 
export default pokedexSlice.reducer
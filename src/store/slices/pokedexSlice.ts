import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../../types/pokemon.model";


const initialState:IPokemon[] = []

const pokedexSlice = createSlice({
    name:"pokedex",
    initialState,
    reducers:{
        addPokemon:(state,action:PayloadAction<IPokemon>) => {
            return [...state, action.payload]
        },
        removePokemon:(state, action:PayloadAction<number>)=>{
            return state.filter((pokemon)=> pokemon.id !== action.payload)
        }
    }
})

export const {addPokemon, removePokemon} = pokedexSlice.actions 
export default pokedexSlice.reducer
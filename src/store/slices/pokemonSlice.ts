import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../../types/pokemon.model";
import { buscarPokemonUrl, listarPokemons } from "../../services/api.service";
import { RootState } from "../store";
import { setCount } from "./paginacaoSlice";
import { setLoading } from "./loadingSlice";



export const pokemonListaThunk = createAsyncThunk('pokemons/list', async (_, config) => {

    config.dispatch(setLoading(true))

    const state = config.getState() as RootState

    const limit = state.paginacao.itensPerPage

    const offset = (state.paginacao.page - 1) * state.paginacao.itensPerPage;

    const pokemonLista = await listarPokemons(limit, offset)

    if (!pokemonLista) {
        return []
    }

    config.dispatch(setCount(pokemonLista.count))

    const pokemons: IPokemon[] = []

    for (const item of pokemonLista.results) {
        const pokemon = await buscarPokemonUrl(item.url)

        if (pokemon !== null) {
            pokemons.push(pokemon)
        }
    }
    config.dispatch(setLoading(false))

    return pokemons
})


const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: [] as IPokemon[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(pokemonListaThunk.fulfilled, (_, action) => {
            return action.payload
        });
    }
})


export default pokemonSlice.reducer
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import pokemonReducer from './slices/pokemonSlice'
import loadingReducer from './slices/loadingSlice'
import paginacaoReducer from './slices/paginacaoSlice'
//import PokemonUnicoReducer from './slices/PokemonUnicoSlice'


const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  loading: loadingReducer,
  paginacao:paginacaoReducer
})

export const persistedReducer = persistReducer({
  // chave no localStorage
  key: 'pokemons',
  storage,
}, rootReducer)
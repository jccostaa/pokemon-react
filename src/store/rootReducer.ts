import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import pokemonReducer from './slices/pokemonSlice'
import loadingReducer from './slices/pokemonSlice'
import modalReducer from './slices/pokemonSlice'


const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  loading: loadingReducer,
  modal: modalReducer
})

export const persistedReducer = persistReducer({
  // chave no localStorage
  key: 'pokedex',
  storage,
}, rootReducer)
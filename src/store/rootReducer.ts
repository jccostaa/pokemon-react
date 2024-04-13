import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import pokemonReducer from './slices/pokemonSlice'
import loadingReducer from './slices/loadingSlice'
import modalReducer from './slices/modalSlice'
import paginacaoReducer from './slices/paginacaoSlice'


const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  loading: loadingReducer,
  modal: modalReducer,
  paginacao:paginacaoReducer
})

export const persistedReducer = persistReducer({
  // chave no localStorage
  key: 'pokedex',
  storage,
}, rootReducer)
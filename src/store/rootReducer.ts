import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({

})

export const persistedReducer = persistReducer({
  // chave no localStorage
  key: 'pokedex',
  storage,
}, rootReducer)
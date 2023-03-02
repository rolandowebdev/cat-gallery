import { combineReducers } from '@reduxjs/toolkit'
import { catSlice } from './slices/catSlice'

export const rootReducer = combineReducers({
  cats: catSlice.reducer,
})

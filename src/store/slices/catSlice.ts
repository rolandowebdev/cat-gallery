import { createSlice } from '@reduxjs/toolkit'
import { Cats } from '@/model/interface'

const initialValue: Cats = {
  cats: [],
  isLoading: false,
}

export const catSlice = createSlice({
  name: 'cats',
  initialState: initialValue,
  reducers: {
    getCatsFetch: (state) => ({
      ...state,
      isLoading: true,
    }),
    getCatsSuccess: (state, action) => ({
      cats: action.payload,
      isLoading: false,
    }),
    getCatsFailure: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catSlice.actions

import { createSlice } from '@reduxjs/toolkit'

interface Cat {
  cats: []
  isLoading: boolean
}

const initialValue: Cat = {
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

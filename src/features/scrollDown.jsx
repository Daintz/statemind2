import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isScroll: false,
  threshold: 0
}

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setIsScroll: (state, action) => {
      const scrollPosition = window.scrollY
      state.isScroll = scrollPosition > state.threshold
      console.log(state.isScroll)
    },
    setThreshold: (state, action) => {
      if (typeof action.payload === 'number') {
        state.threshold = action.payload
        console.log(state.threshold)
      }
    }
  }
})

export const { setIsScroll, setThreshold } = scrollSlice.actions

export default scrollSlice.reducer

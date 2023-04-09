import { configureStore } from '@reduxjs/toolkit'
import scrollReducer from '../features/scrollDown'

export const store = configureStore({
  reducer: {
    scroll: scrollReducer
  }
})

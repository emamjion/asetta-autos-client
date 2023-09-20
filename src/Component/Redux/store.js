import { configureStore } from '@reduxjs/toolkit'
import baseapi from './feature/api/baseapi'

export default configureStore({
  reducer: {
    [baseapi.reducerPath]: baseapi.reducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(baseapi.middleware)
})
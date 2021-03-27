import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './contactSlice'

export default configureStore({
  reducer: {
    contacts: contactReducer,
  },
})

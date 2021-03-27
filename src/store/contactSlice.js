import { createSlice } from '@reduxjs/toolkit'

// { contacts: [...] }

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: null,
  },
  reducers: {
    setContacts: (state, { payload }) => {
      state.contacts = payload
    },
    addContact: (state, { payload }) => {
      state.contacts.push(payload)
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((c) => c.id !== payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setContacts, deleteContact, addContact } = contactSlice.actions

export default contactSlice.reducer

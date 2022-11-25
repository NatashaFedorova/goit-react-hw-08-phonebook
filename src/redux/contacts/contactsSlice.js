import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  // changeContact,
  deleteContact,
  changeContact,
} from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [changeContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [getContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [changeContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [changeContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

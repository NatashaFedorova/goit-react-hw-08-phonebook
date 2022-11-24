import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      console.log(name, number);
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    console.log(contactId);
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const changeContact = createAsyncThunk(
//   'contacts/changeContact',
//   async (contactId, { name, number }, thunkAPI) => {
//     console.log(contactId);
//     console.log(name, number);
//     try {
//       const response = await axios.patch(`/contacts/${contactId}`, {
//         name,
//         number,
//       });
//       return response.data;
//     } catch ({ message }) {
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

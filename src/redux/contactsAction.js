import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsAPI, addContactAPI, deleteContactAPI } from '../api';


export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchContactsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContactAPI(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContactAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

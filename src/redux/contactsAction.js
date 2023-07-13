import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import {
  fetchContactsAPI,
  addContactAPI,
  deleteContactAPI,
} from '../api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const response = await fetchContactsAPI();
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch contacts');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    try {
      const response = await addContactAPI({ name, number });
      return response.data;
    } catch (error) {
      throw new Error('Failed to add contact');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    try {
      await deleteContactAPI(contactId);
      return contactId;
    } catch (error) {
      throw new Error('Failed to delete contact');
    }
  }
);

export const changeFilter = createAction('contacts/changeFilter');

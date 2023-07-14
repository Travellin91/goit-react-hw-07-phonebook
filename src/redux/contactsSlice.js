import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContactsAPI, addContactAPI, deleteContactAPI } from '../api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await fetchContactsAPI();
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  try {
    const response = await addContactAPI(contact);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add contact');
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  try {
    await deleteContactAPI(contactId);
    return contactId;
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectFilteredContacts = (state) => {
  const { items } = state.contacts;
  const filter = state.filter;
  if (filter) {
    return items.filter((contact) =>
      contact && contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return items;
  }
};

export default contactsSlice.reducer;
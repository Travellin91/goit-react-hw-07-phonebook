import axios from 'axios';

const baseURL = 'https://64aff9d5c60b8f941af4fe46.mockapi.io/contacts';

export const fetchContactsAPI = async () => {
  try {
    const response = await axios.get(`${baseURL}/contacts`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
};

export const addContactAPI = async (contact) => {
  try {
    const response = await axios.post(`${baseURL}/contacts`, contact);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add contact');
  }
};

export const deleteContactAPI = async (contactId) => {
  try {
    await axios.delete(`${baseURL}/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
};

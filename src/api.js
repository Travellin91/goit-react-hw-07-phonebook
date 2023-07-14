import axios from 'axios';

const baseURL = 'https://64aff9d5c60b8f941af4fe46.mockapi.io/contacts/';

export const fetchContactsAPI = async () => {
  const response = await axios.get(`${baseURL}`);
  return response.data;
};

export const addContactAPI = async (contact) => {
  const response = await axios.post(`${baseURL}`, contact);
  return response.data;
};

export const deleteContactAPI = async (contactId) => {
  await axios.delete(`${baseURL}/${contactId}`);
  return contactId;
};

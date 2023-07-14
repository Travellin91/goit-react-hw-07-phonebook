import axios from 'axios';

const baseURL = 'https://64aff9d5c60b8f941af4fe46.mockapi.io';

export const fetchContactsAPI = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const addContactAPI = async (contact) => {
  const response = await axios.post(baseURL, contact);
  return response.data;
};

export const deleteContactAPI = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
  return id;
};

import axios from 'axios';

const baseURL = 'https://64aff9d5c60b8f941af4fe46.mockapi.io';

export const fetchContactsAPI = () => {
  return axios.get(`${baseURL}/contacts`).then(response => {
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error('Invalid response format');
    }
  });
};

export const addContactAPI = contact => {
  return axios
    .post(`${baseURL}/contacts`, contact)
    .then(response => response.data);
};

export const deleteContactAPI = contactId => {
  return axios.delete(`${baseURL}/contacts/${contactId}`).then(() => contactId);
};

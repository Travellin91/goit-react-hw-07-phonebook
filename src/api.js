import axios from 'axios';

const baseURL = 'https://64aff9d5c60b8f941af4fe46.mockapi.io';

export const fetchContactsAPI = () => {
  return axios.get(`${baseURL}/contacts`)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to fetch contacts');
      }
    });
};

export const addContactAPI = contact => {
  const { name, number } = contact;
  return axios.post(`${baseURL}/contacts`, { name, number })
    .then(response => {
      if (response.status === 201) {
        return response.data;
      } else {
        throw new Error('Failed to add contact');
      }
    });
};

export const deleteContactAPI = contactId => {
  return axios.delete(`${baseURL}/contacts/${contactId}`)
    .then(response => {
      if (response.status === 200) {
        return contactId;
      } else {
        throw new Error('Failed to delete contact');
      }
    });
};

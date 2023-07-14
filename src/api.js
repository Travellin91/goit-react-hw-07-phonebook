import axios from "axios";

const baseURL = "https://64aff9d5c60b8f941af4fe46.mockapi.io/contacts";

export const fetchContactsAPI = () => {
  return axios.get(baseURL);
};

export const addContactAPI = (contact) => {
  return axios.post(baseURL, contact);
};

export const deleteContactAPI = (id) => {
  const deleteURL = `${baseURL}/${id}`;
  return axios.delete(deleteURL);
};

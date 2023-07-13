import axios from "axios";

const baseURL = "https://64aff9d5c60b8f941af4fe46.mockapi.io/contacts";

export function fetchContacts() {
  return axios.get(baseURL);
}

export function addContact(contact) {
  return axios.post(baseURL, contact);
}

export function deleteContact(id) {
  const deleteURL = baseURL + "/" + id.toString();
  return axios.delete(deleteURL);
}

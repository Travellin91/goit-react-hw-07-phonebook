const baseURL = 'https://64aff9d5c60b8f941af4fe46.mockapi.io';

export const fetchContactsAPI = () => {
  return fetch(`${baseURL}/contacts`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch contacts');
      }
    })
    .then(data => {
      if (Array.isArray(data)) {
        return data;
      } else {
        throw new Error('Invalid response format');
      }
    });
};

export const addContactAPI = contact => {
  return fetch(`${baseURL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to add contact');
      }
    });
};

export const deleteContactAPI = contactId => {
  return fetch(`${baseURL}/contacts/${contactId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        return contactId;
      } else {
        throw new Error('Failed to delete contact');
      }
    });
};

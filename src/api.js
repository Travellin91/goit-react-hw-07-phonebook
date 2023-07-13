export const fetchContactsAPI = async () => {
    try {
      const response = await fetch('https://64aff9d5c60b8f941af4fe46.mockapi.io/contacts/');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch contacts');
    }
  };
  
  export const addContactAPI = async (contact) => {
    try {
      const response = await fetch('https://64aff9d5c60b8f941af4fe46.mockapi.io/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to add contact');
    }
  };
  
  export const deleteContactAPI = async (contactId) => {
    try {
      await fetch(`https://64aff9d5c60b8f941af4fe46.mockapi.io/contacts/${contactId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      throw new Error('Failed to delete contact');
    }
  };
  
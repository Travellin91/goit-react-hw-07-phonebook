import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectFilteredContacts } from '../../redux/contactsSlice';
import '../ContactList/contactlist.css';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  if (!contacts) {
    return null; 
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact) => {
        const { id, name, number } = contact;
        return (
          <li className="contact-item" key={id}>
            <span className="contact-name">{name}</span> -{' '}
            <span className="contact-number">{number}</span>
            <button
              className="contact-delete-button"
              onClick={() => handleDeleteContact(id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;

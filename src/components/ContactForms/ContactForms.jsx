import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import '../ContactForms/contactforms.css';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.contacts.items || []);

  const [formValues, setFormValues] = React.useState({ name: '', number: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = formValues;

    const addInputValue = (contact) =>
      contact && (contact.name === name || contact.number === number);

    if (items.some(addInputValue)) {
      alert('Contact is already in contacts');
      return;
    }

    dispatch(addContact(formValues));

    reset();
  };

  const reset = () => {
    setFormValues({ name: '', number: '' });
  };

  const loginInputNameId = nanoid();
  const loginInputNumberId = nanoid();

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor={loginInputNameId} className="contact-form-label">
        Name
        <input
          className="contact-form-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={loginInputNameId}
          value={formValues.name}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor={loginInputNumberId} className="contact-form-label">
        Number
        <input
          className="contact-form-input input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={loginInputNumberId}
          value={formValues.number}
          onChange={handleInputChange}
        />
      </label>

      <button className="contact-form-button" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

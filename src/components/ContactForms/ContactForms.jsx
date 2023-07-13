import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import '../ContactForms/contactforms.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const loginInputNameId = nanoid();
  const loginInputNumberId = nanoid();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

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
          value={name}
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
          value={number}
          onChange={handleInputChange}
        />
      </label>

      <button className="contact-form-button" type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);

import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '../redux/store';
import { fetchContacts } from '../redux/contactsSlice';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import './app.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1 className="app-heading">PhoneBook</h1>
      <ContactForms />
      <Filter />
      <ContactList />
    </div>
  );
};

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithRedux;

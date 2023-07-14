import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import './app.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="app-heading">PhoneBook</h1>
        <ContactForms />
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;

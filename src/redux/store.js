import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { contactsReducer } from './contactsSlice';
import filterReducer from './filterSlice';

const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

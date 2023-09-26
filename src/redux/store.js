import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const root = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

const store = configureStore({ root });

export { store as default };

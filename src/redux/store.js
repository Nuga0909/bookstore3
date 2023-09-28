import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const reducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

const store = configureStore({
  reducer,
});
export { store as default };

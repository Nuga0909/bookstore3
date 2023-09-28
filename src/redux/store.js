import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookstoringapi from './fetch';
import categoryReducer from './categories/categoriesSlice';

const reducer = combineReducers({
  book: bookstoringapi,
  category: categoryReducer,
});

const store = configureStore({
  reducer,
});
export { store as default };

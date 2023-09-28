import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export { store as default };

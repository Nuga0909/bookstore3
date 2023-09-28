// bookSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const uniqueId = 'FuHmnCA7EBqJ1jB7klF3';
const URL = `${baseURL}/apps/${uniqueId}/books`;

const initialState = {
  books: [],
  loading: false,
  localBooks: [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      genres: 'Action',
      author: 'Suzanne Collins',
      progres: 64,
      chapter: 'Chapter 17: "A Lesson Learned"',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      genres: 'Fantasy',
      author: 'Frank Herbert',
      progres: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      genres: 'Economics',
      author: 'Suzanne Collins',
      progres: 0,
      chapter: 'Introduction: "A Lesson Learned"',
    },
  ],
};

export const getAllBooks = createAsyncThunk('books/getAllBooks', async () => {
  const respo = await axios.get(URL);
  const { data } = respo;
  const books = Object.entries(data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      author,
      category,
    };
  });
  return books;
});

export const addBookAPI = createAsyncThunk('book/addBookAPI', async (payload) => {
  await axios.post(URL, payload);
  return getAllBooks();
});

export const removeBookAPI = createAsyncThunk('book/removeBookAPI', async (payload) => {
  await axios.delete(`${URL}/${payload}`);
  return getAllBooks();
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => [...state.localBooks, action.payload],
    removeBooks: (state, action) => {
      const index = state.localBooks.findIndex((book) => book.id === action.payload);
      state.localBooks.splice(index, 1);
    },
  },
  extraReducers: {
    [getAllBooks.pending]: (state) => {
      state.loading = true;
    },
    [getAllBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [getAllBooks.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addBooks, removeBooks } = bookSlice.actions;

export default bookSlice.reducer;

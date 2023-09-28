import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Books';
import Form from './BooksForm';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <ul>
        {books.map((books) => (
          <li key={books.key}>
            {' '}
            <Book title={books.title} author={books.author} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
}
export default BookList;

import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Books';
import Form from './BooksForm';

function BookList() {
  const books = useSelector((state) => state.book);

  return (
    <ul className="container">
      {books.map((book) => (
        <>
          <li className="content" key={book.id}>
            <Book title={book.title} author={book.author} id={book.id} />
          </li>
        </>
      ))}

      <Form />
    </ul>
  );
}

export default BookList;

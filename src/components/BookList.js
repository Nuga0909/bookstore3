import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './BooksForm';
import { getAllBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div className="container">
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.Id}
            Id={book.Id}
            Title={book.title}
            Author={book.author}
            Category={book.category}
          />
        ))}
      </ul>
      <div className="create"> </div>
      <Form />
    </div>
  );
}

export default BookList;

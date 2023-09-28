import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/booksSlice';

function Books({ title, author, id }) {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBooks(id));
  };
  return (
    <span className="book">
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="submit" onClick={remove}>
        Remove
      </button>
    </span>
  );
}

export default Books;
Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/fetch';

function Books({ Title, Author, Id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAPI(Id));
  };
  return (
    <span className="title-container">
      <h1>{Title}</h1>
      <p>{Author}</p>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </span>
  );
}

export default Books;
Books.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};
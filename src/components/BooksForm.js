import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAPI } from '../redux/books/booksSlice';

function Form() {
  const [state, setState] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });

  const onChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      category: 'Category Action',
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAPI(state));
    setState({
      item_id: uuidv4(),
      title: '',
      author: '',
      category: 'Category thriller',
    });
  };

  return (
    <div className="Add-container">
      <h2 className="add-title">ADD NEW BOOK</h2>
      <section>
        <form className="add-book" onSubmit={handleSubmit}>
          <input
            type="text"
            className="title-input"
            id="title"
            placeholder="Add Book Title"
            name="title"
            required
            value={state.title}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            id="author"
            className="author-input"
            name="author"
            placeholder="Add Book Author"
            required
            value={state.author}
            onChange={onChangeHandler}
          />
          <button className="add-button" type="submit">
            ADD BOOK
          </button>
        </form>
      </section>
    </div>
  );
}

export default Form;

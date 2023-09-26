const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  Books: [],
};

export const addbook = (book) => ({
  type: ADD_BOOK,
  text: book,
});
export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  text: book,
});

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        state,
        Book: [state.Book, action.text],
      };
    case REMOVE_BOOK:
      return {
        state,
        Book: state.Book.filter((Books) => Books !== action.text),
      };
    default:
      return state;
  }
}

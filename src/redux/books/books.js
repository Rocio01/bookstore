import axios from 'axios';

const SET_BOOKS = 'bookStore/books/SET_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const BOOK_STORE_ID = 'om3QgaPKeSFviyizCbfq';
const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export const addBook = (payload) => () => {
  fetch(`${URL}${BOOK_STORE_ID}/books`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});

export const fetchBooks = (dispatch) => {
  axios.get(`${URL}${BOOK_STORE_ID}/books`)
    .then((res) => {
      dispatch(setBooks(res.data));
    });
};

export const removeBook = (payload) => () => {
  fetch(`${URL}${BOOK_STORE_ID}/books/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  });
};
export default bookReducer;

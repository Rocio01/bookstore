import axios from 'axios';

const SET_BOOKS = 'bookStore/books/SET_BOOKS';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const BOOK_STORE_ID = 'om3QgaPKeSFviyizCbfq';
const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    // case REMOVE_BOOK:
    //   return state.filter((element) => element.id !== action.id);
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

// export const fetchBooks = (dispatch) => {
//   fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/om3QgaPKeSFviyizCbfq/books')
//     .then((res) => {
//       console.log(res);
//       // res.json();
//     })
//     .then((response) => {
//       dispatch(setBooks(response));
//       console.log(response);
//     });
// };

export const fetchBooks = (dispatch) => {
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/om3QgaPKeSFviyizCbfq/books')
    .then((res) => {
      dispatch(setBooks(res.data));
    });
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;

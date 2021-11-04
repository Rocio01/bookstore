const SET_BOOKS = 'bookStore/books/SET_BOOKS';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const BOOK_STORE_ID = 'om3QgaPKeSFviyizCbfq';
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return [...state, action.payload];
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

export const fetchBooks = async (dispatch) => {
  const books = await fetch(`${URL}${BOOK_STORE_ID}/books`);
  console.log(books, 'hello');

  dispatch(setBooks(books));
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;

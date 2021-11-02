import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';

const reducers = combineReducers({
  book: bookReducer,
});

const store = createStore(
  reducers,
  {},
);

export default store;

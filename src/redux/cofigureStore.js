import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';

const reducers = combineReducers({
  book: bookReducer,
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

export default store;

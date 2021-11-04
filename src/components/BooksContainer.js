import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import FormBook from './FormBook';
import 'react-circular-progressbar/dist/styles.css';
import { fetchBooks } from '../redux/books/books';

/* eslint-disable array-callback-return */
const BooksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks(dispatch);
  }, []);

  const bookStore = useSelector((store) => store.bookReducer.books);
  // const bContainer = [];
  // Object.entries(bookStore).forEach((obj) => {
  //   const [key, value] = obj;
  //   bContainer.push(value[0]);
  //   console.log(key, value[0]);
  // });

  // Object.entries(bookStore).map(([key, value]) => {
  //   console.log(key, value[0]);
  // });

  return (
    <div className="books-container">

      {

      (Object.entries(bookStore).map(([key, value]) => (
        <div className="book" key={value.id}>
          <Book
            category={value[0].category}
            title={value[0].title}
            // author={book[0].author}
            chapter={2}
            completed={70}
            item_id={key}
          />
        </div>
      )))
    }

      <FormBook />
    </div>
  );
};

export default BooksContainer;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import FormBook from './FormBook';
import 'react-circular-progressbar/dist/styles.css';
import { fetchBooks } from '../redux/books/books';

const BooksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks(dispatch);
  }, []);

  const bookStore = useSelector((store) => store.bookReducer.books);
  return (
    <div className="books-container">

      {

      (Object.entries(bookStore).map(([key, value]) => (
        <div className="book" key={value.id}>
          <Book
            category={value[0].category}
            title={value[0].title}
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

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
  console.log(bookStore);
  return (
    <div className="books-container">

      {(Object.values(bookStore)).map((book) => (
        <div className="book" key={book.id}>
          <Book
            category={book[0].category}
            title={book[0].title}
            // author={book[0].author}
            chapter={2}
            completed={70}
            // item_id={}
          />
        </div>
      ))}

      <FormBook />
    </div>
  );
};

export default BooksContainer;

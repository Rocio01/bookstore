import React from 'react';
import Book from './Book';

const BooksContainer = () => {
  const books = [
    {
      id: 1,
      category: 'Fantasy',
      title: 'Harry Potter and the Sorcerer’s Stone',
      author: 'J.K. Rowling',
      chapter: 1,
      completed: 50,
    },
    {
      id: 2,
      category: 'Fantasy',
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      chapter: 1,
      completed: 80,
    },
    {
      id: 3,
      category: 'Fantasy',
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      chapter: 1,
      completed: 60,
    },

  ];
  return (
    <div className="books-container">

      { books.map((book) => (
        <div className="book" key={book.id}>
          <Book
            category={book.category}
            title={book.title}
            author={book.author}
            chapter={book.chapter}
            completed={book.completed}
            id={book.id}
          />
        </div>
      ))}

    </div>
  );
};

export default BooksContainer;

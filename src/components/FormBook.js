import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const FormBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    const bookCategory = document.querySelector('#category').value;
    const bookTitle = document.querySelector('#title').value;
    const bookAuthor = document.querySelector('#author').value;

    const newBook = {
      item_id: uuidv4(),
      title: bookTitle,
      category: bookCategory,
      author: bookAuthor,

    };

    dispatch(addBook(newBook));
    console.log(newBook);
  };

  return (
    <div className="form-container">
      <h4>
        ADD NEW BOOK
      </h4>
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <div className="input-group book-title">
            <input type="text" className="form-control" id="title" name="title" placeholder="Book title" required />
          </div>
        </div>
        <div className="col-auto">
          <div className="input-group book-author">
            <input type="text" className="form-control" id="author" name="author" placeholder="Author" required />
          </div>
        </div>

        <div className="col-auto">
          <select className="form-control" id="category" placeholder="category">
            <option>Action</option>
            <option>Romance</option>
            <option>Fantasy</option>
            <option>Mistery</option>
          </select>
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary" onClick={submitBookToStore}>ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default FormBook;

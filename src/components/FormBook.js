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
  };

  return (
    <div className="form-container">
      <h4 className="add-form-title p-2">
        ADD NEW BOOK
      </h4>
      <form className="row  align-items-center">
        <div className="col  div-i">
          <div className="input-group ">
            <input type="text" className=" input-form input-title" id="title" name="title" placeholder="Book title" required />
          </div>
        </div>

        <div className="col div-i">
          <select className=" input-form input-category" id="category" placeholder="category">
            <option>Action</option>
            <option>Romance</option>
            <option>Fantasy</option>
            <option>Mistery</option>
            <option>Fiction</option>
          </select>
        </div>

        <div className="col div-button">
          <button type="submit" className="btn btn-add-book" onClick={submitBookToStore}>ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default FormBook;

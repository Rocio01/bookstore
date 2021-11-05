import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
/* eslint-disable camelcase */

const Book = (props) => {
  const {
    category, title, chapter, completed, item_id,
  } = props;

  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBook(item_id));
  };

  return (

    <div className="row book-individual mb-3">
      <div className="Book-info col-4">
        <ul>
          <li className="category">
            {category}
          </li>
          <li className="title">
            {title}
          </li>
          <li className="author">
            {' '}
          </li>
          <li className="row">
            <button type="button" value={item_id} className="comments col-3">Comments</button>
            <span className="line1 col-1">
              {' | '}
            </span>
            <button type="button" onClick={removeBookFromStore} className="remove col-3">Remove</button>
            <span className="line1 col-1">
              {' | '}
            </span>
            <button type="button" value={item_id} className="edit col-3">Edit</button>
          </li>
        </ul>
      </div>
      <div className="progress-book col-4">
        <ul className="row">
          <li className="col-6">
            <CircularProgressbar value={completed} styles={{ root: { width: '100px', height: '100px' } }} />

          </li>
          <li className="col-6">
            <h2 className="percentage">
              {completed}
              %
            </h2>
            <p className="completed">Completed</p>
          </li>
        </ul>

      </div>
      <div className="col-4 chapter-info">
        <ul>
          <li className="current-chapter">
            CURRENT CHAPTER
          </li>
          <li className="chapter">
            Chapter
            {chapter}
          </li>
          <li className="py-2">
            <button type="button" value={item_id} className="update-button">UPDATE PROGRESS</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;

import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const {
    category, title, author, chapter, completed, id,
  } = props;
  return (

    <div className="row">
      <div className="Book-info col">
        <ul>
          <li className="category">
            {category}
          </li>
          <li className="title">
            {title}
          </li>
          <li className="author">
            {author}
          </li>
          <li>
            <button type="button" value={id}>Comments</button>
            {' | '}
            <button type="button" value={id}>Remove</button>
            {' | '}
            <button type="button" value={id}>Edit</button>
          </li>
        </ul>
      </div>
      <div className="progress-book col">
        <ul className="row">
          <li className="col">
            <CircularProgressbar value={completed} styles={{ root: { width: '100px', height: '100px' } }} />

          </li>
          <li className="col">
            <h2>
              {completed}
              %
            </h2>
            <p>Completed</p>
          </li>
        </ul>

      </div>
      <div className="col">
        <ul>
          <li>
            CURRENT CHAPTER
          </li>
          <li>
            Chapter
            {chapter}
          </li>
          <li className="py-2">
            <button type="button" value={id}>UPDATE PROGRESS</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;

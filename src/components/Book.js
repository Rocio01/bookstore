import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    category, title, author, chapter, completed, id,
  } = props;
  return (

    <>
      <div className="Book-info">
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
      <div className="progress">
        <h4>
          {' '}
          {completed}
          {' '}
          % Completed
        </h4>

      </div>
      <div>
        <ul>
          <li>
            CURRENT CHAPTER
          </li>
          <li>
            Chapter
            {' '}
            {chapter}
          </li>
          <li>
            <button type="button" value={id}>UPDATE PROGRESS</button>
          </li>
        </ul>
      </div>
    </>
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

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BooksContainer',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <ul className="nav p-3">
      <li className="nav-item">
        <h4 className="nav-link title">
          Bookstore
        </h4>
        {
          links.map((link) => (
            <li className="nav-item " key={link.id}>
              <h4 className="nav-link">
                <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>

              </h4>
            </li>
          ))
        }
      </li>
    </ul>
  );
};

export default Navbar;

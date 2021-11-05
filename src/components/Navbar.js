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
    <ul className="nav p-3 ">
      <div className="nav-item row">
        <li className="nav-link  col-5">
          <h4 className="title-app">
            Bookstore ZR
          </h4>

        </li>
        {
          links.map((link) => (
            <li className="nav-item col-3 " key={link.id}>
              <h4 className="nav-link nav-categories">
                <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>

              </h4>
            </li>
          ))
        }
      </div>
    </ul>
  );
};

export default Navbar;

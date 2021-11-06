import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/user.PNG';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <ul className="nav p-3">
      <div className="nav-item row">
        <li className="nav-link  col-6">
          <h4 className="title-app">
            Bookstore CMS
          </h4>

        </li>
        {
          links.map((link) => (
            <li className="nav-item col-2" key={link.id}>
              <h4 className="nav-link nav-categories">
                <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>

              </h4>
            </li>
          ))
        }
      </div>
      <div>
        <img src={user} alt="user" className="user" />
      </div>
    </ul>
  );
};

export default Navbar;

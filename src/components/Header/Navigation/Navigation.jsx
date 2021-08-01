import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/posts" className="navigation_link">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/new-post" className="navigation_link">
            New Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

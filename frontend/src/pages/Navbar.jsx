// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';
import './Navbar.css';

const Navbar = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setLoggedInUser('');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">PERSONALIZED LEARNING </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home/learning">Learning</Link>
        </li>
        <li>
          <Link to="/home/about">About Us</Link>
        </li>
        <li>
          <Link to="/home/contact">Contact</Link>
        </li>
        {loggedInUser && (
          <li>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar.jsx';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <h1>Welcome {loggedInUser}</h1>
      <div>Welcome to our website</div>
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default Home;

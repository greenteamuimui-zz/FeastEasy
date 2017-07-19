import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({currentUser, logout, logInAsGuest}) =>{
  if (currentUser) {
    return (
      <div className="header-afterlogin">
        <h1>Welcome {currentUser.username}!</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div className="header-beforelogin">
        <button onClick={() => logInAsGuest({
          username: "Cherry",
          password: "123456"
        })}>
          Guest LogIn
        </button>
        <Link to="/signup">
          Sign Up
        </Link>
        <Link to="/login">
          Log In
        </Link>
      </div>
    );
  }
};

export default Header;

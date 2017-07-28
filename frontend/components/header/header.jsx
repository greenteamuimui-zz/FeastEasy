import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({currentUser, logout, logInAsGuest}) =>{
  if (currentUser) {
    return (
      <div className="header-afterlogin">
        <h1>Welcome {currentUser.username}!</h1>
        <a onClick={logout}>Log Out</a>
        <Link to='/myPage'>My Profile</Link>
      </div>
    );
  } else {
    return (
      <div className="header-beforelogin">
        <a onClick={() => logInAsGuest({
          username: "Guest",
          password: "123456"
        })}>
        Guest Log In
        </a>
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

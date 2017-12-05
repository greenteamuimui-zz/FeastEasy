import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserBox = ({user}) => {
  return (
      <div className="userBox">
        <Link to={`/kitchens/${user.kitchenId}`}><img src={user.image_url}/>{user.kitchenName}</Link>
      </div>
  );
};


export default UserBox;

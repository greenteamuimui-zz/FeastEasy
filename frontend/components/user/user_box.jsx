import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserBox = ({user}) => {
  return (
      <div>
        <h2>{user.username}</h2>
        <img src={user.image_url}/>
        <Link to={`/kitchens/${user.kitchenId}`}>{user.kitchenName}</Link>
      </div>
  );
};


export default UserBox;

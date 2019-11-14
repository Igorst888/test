import React from 'react';
import {Link} from 'react-router-dom';

const UserPreview = ({user}) => {
  return <div>
    <h3>{user.name}</h3>
    <Link to={`/user-details/${user.id}`}>{user.email}</Link>
    <hr/>
  </div>
};

export default UserPreview;

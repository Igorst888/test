import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const UsersList = (props) => {
  const [users, changeUsers] = useState(null);

  // componentDidMount
  useEffect(() => {
    if (!users) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          if (!res.ok) {
            throw new Error('fetch error')
          }
          return res.json();
        })
        .then(body => {
          changeUsers(body);
        })
    }
  }, []);

  return (<div>
    {!users && <h1>Loading...</h1>}

    {users
      ? users.map(user => (<div key={user.id}>
        <h3>{user.name}</h3>
        <Link to={`/user-details/${user.id}`}>{user.email}</Link>
        <hr/>
      </div>))
      : <h3>Loading the list of users...</h3>
    }
  </div>)
};

export default UsersList;

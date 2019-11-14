import React, {useState, useEffect} from 'react';


const UserDetails = (props) => {
  const [userDetails, changeUserDetails] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('fetch error')
        }
        return res.json();
      })
      .then(body => {
        changeUserDetails(body);
      })
  }, []);

  return (<div>
    <h1>User details</h1>
    <h2>User id: {props.match.params.id}</h2>

    {userDetails
      ? <div>
        {userDetails.name}
        <br/>
        {userDetails.email}
      </div>
      : <h3>Loading user details...</h3>}
  </div>)
};

export default UserDetails;

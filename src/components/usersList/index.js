import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {fetchUsers} from '../../actions'
import UserPreview from './userPreview';

const UsersList = (props) => {

  // componentDidMount
  useEffect(() => {
    if (!props.users.value) {
      props.fetchUsers();
    }
  }, []);

  return (<div>
    <h1>Users list</h1>
    {props.users.loading && <h2>Loading users...</h2>}
    
    <hr/>
    
    {props.users.value && <ul>
      {props.users.value.map(user =>
        <li key={`users-${user.email}`}>
          <UserPreview user={user}/>
        </li>)}
    </ul>}
  </div>)
};

const mapStateToProps = ({users}) => ({
  users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

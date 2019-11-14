import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchUsers } from '../../actions'

const UsersList = (props) => {

  // componentDidMount
  useEffect(() => {
    if (props.users) {
      props.fetchUsers();
    }
  }, []);

  return (<div>
    {!props.users && <h1>Loading...</h1>}

    {props.users
      ? props.users.map(user => (<div key={user.id}>
        <h3>{user.name}</h3>
        <Link to={`/user-details/${user.id}`}>{user.email}</Link>
        <hr/>
      </div>))
      : <h3>Loading the list of users...</h3>
    }
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

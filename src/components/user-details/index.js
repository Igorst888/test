import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchDetails} from '../../actions';
import {Link} from 'react-router-dom';

const UserDetails = (props) => {
  const id = props.match.params.id;
  // componentDidMount
  useEffect(() => {
    props.fetchDetails(id);
  }, []);

  return (<div>
    <h1>User {id} details</h1>
    <Link to="/">Go back to the list</Link>
    {props.activeUser.loading && <h1>Loading user details...</h1>}
    
    <br/>
    <br/>

    {props.activeUser.value
    && <div>
      {props.activeUser.value.name}
      <br/>
      {props.activeUser.value.email}
    </div>}
  </div>)
};

const mapStateToProps = ({activeUser}) => ({
  activeUser
});

const mapDispatchToProps = dispatch => ({
  fetchDetails: (id) => dispatch(fetchDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);

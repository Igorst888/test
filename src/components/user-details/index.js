import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchDetails} from "../../actions";

const UserDetails = (props) => {

  // componentDidMount
  useEffect(() => {
    props.fetchDetails(props.match.params.id);
  }, []);

  return (<div>
    <h1>User details</h1>
    <h2>User id: {props.match.params.id}</h2>

    {props.activeUser.value
      ? <div>
        {props.activeUser.value.name}
        <br/>
        {props.activeUser.value.email}
      </div>
      : <h3>Loading user details...</h3>}
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

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UsersList from "./usersList";
import UserDetails from "./user-details";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={UsersList} exact/>
          <Route path="/user-details/:id" component={UserDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

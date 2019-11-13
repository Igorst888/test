import { combineReducers } from 'redux';

import activeUserReducer from './activeUserReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  activeUser: activeUserReducer,
  users: usersReducer
});

export default rootReducer;

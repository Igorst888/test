const ACTIONS = {
  FETCH_USERS: 'FETCH_USERS',
  LOAD_USERS: 'LOAD_USERS',
  LOAD_USERS_SUCCESS: 'LOAD_USERS_SUCCESS',
  LOAD_USERS_FAIL: 'LOAD_USERS_FAIL',

  FETCH_DETAILS: 'FETCH_DETAILS',
  LOAD_DETAILS: 'LOAD_DETAILS',
  LOAD_DETAILS_SUCCESS: 'LOAD_DETAILS_SUCCESS',
  LOAD_DETAILS_FAIL: 'LOAD_DETAILS_FAIL'
};

const fetchUsers = () => ({
  type: ACTIONS.FETCH_USERS,
});

const loadUsers = () => ({
  type: ACTIONS.LOAD_USERS,
});

const loadUsersSuccess = (data) => ({
  type: ACTIONS.LOAD_USERS_SUCCESS,
  data
});

const loadUsersFail = (error) => ({
  type: ACTIONS.LOAD_USERS_FAIL,
  error
});

const fetchDetails = (id) => ({
  type: ACTIONS.FETCH_DETAILS,
  id
});

const loadDetails = () => ({
  type: ACTIONS.LOAD_DETAILS
});

const loadDetailsSuccess = (data) => ({
  type: ACTIONS.LOAD_DETAILS_SUCCESS,
  data
});

const loadDetailsFail = (error) => ({
  type: ACTIONS.LOAD_DETAILS_FAIL,
  error
});

export {
  ACTIONS,
  fetchUsers,
  loadUsers,
  loadUsersSuccess,
  loadUsersFail,
  fetchDetails,
  loadDetails,
  loadDetailsSuccess,
  loadDetailsFail
};

import { ACTIONS } from "../actions";

const initialState = {
  value: [],
  loading: false,
  success: false,
  error: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_USERS:

      return {
        value: [],
        loading: true,
        success: false,
        error: false
      };

    case ACTIONS.LOAD_USERS_SUCCESS:
      return {
        value: action.data,
        loading: false,
        success: true,
        error: false
      };

    case ACTIONS.LOAD_USERS_FAIL:
      return {
        value: null,
        loading: false,
        success: false,
        error: true
      };

    default:
      return state;
  }

};

export default usersReducer;

import { ACTIONS } from "../actions";

const initialState = {
  value: null,
  loading: false,
  success: false,
  error: false
};

const activeUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_DETAILS:
      return {
        value: null,
        loading: true,
        success: false,
        error: false
      };
    case ACTIONS.LOAD_DETAILS_SUCCESS:
      debugger;

      return {
        value: action.data,
        loading: false,
        success: true,
        error: false
      };
    case ACTIONS.LOAD_DETAILS_FAIL:
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

export default activeUserReducer;

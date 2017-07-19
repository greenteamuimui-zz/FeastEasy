import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/errors_actions';

const defaultState = [];

const ErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state, action.errors);
      return newState;
    case CLEAR_ERRORS:
      newState = [];
      return newState;
    default:
      return state;

  }
};

export default ErrorsReducer;

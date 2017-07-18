import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const defaultState = (
      {
        currentUser: null,
        errors: [""]
      }
  );

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state, {currentUser: action.currentUser, errors: [""]});
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state, {currentUser: null, errors: action.errors});
      return newState;
    default:
      return state;

  }
};

export default SessionReducer;

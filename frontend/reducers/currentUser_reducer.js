import {RECEIVE_CURRENT_USER} from '../actions/session_actions';


const currentUserReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    newState = action.currentUser;
      return newState;
    default:
      return state;
  }
};

// newState = Object.assign({}, state, action.currentUser);
export default currentUserReducer;

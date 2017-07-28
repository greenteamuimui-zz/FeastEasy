import {RECEIVE_USERS} from '../actions/user_actions';
import merge from 'lodash/merge';

const userReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
    newState = action.users;
    return newState;
    default:
      return state;
  }
};

export default userReducer;

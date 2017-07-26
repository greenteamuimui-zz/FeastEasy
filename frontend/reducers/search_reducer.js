import {RECEIVE_SEARCH} from '../actions/search_actions';

const searchReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SEARCH:
    newState = action.search;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;

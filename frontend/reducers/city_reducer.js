import {RECEIVE_CITIES} from '../actions/city_actions';

const cityReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CITIES:
    newState = action.cities;
      return newState;
    default:
      return state;
  }
};

export default cityReducer;

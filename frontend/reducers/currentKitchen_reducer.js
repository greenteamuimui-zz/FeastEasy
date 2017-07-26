import {RECEIVE_KITCHEN} from '../actions/kitchen_actions';
import {RECEIVE_FAVORITE} from '../actions/favorite_actions';
import merge from 'lodash/merge';

const currentKitchenReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_KITCHEN:
    newState = action.currentKitchen;
    return newState;
    case RECEIVE_FAVORITE:
    return Object.assign({}, newState, {favorite_id: action.favorite.favorite});
    default:
      return state;
  }
};

export default currentKitchenReducer;

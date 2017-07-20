import {RECEIVE_KITCHEN, RECEIVE_KITCHENS} from '../actions/kitchen_actions';


const kitchenReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_KITCHEN:
    newState = action.kitchen;
      return newState;
    case RECEIVE_KITCHENS:
    newState = action.kitchens;
      return newState;
    default:
      return state;
  }
};

// this also works but a long way
// console.log(state);
// console.log(action.kitchens);
// if (Object.keys(action.kitchens).length === 0) {
//   newState = {};
// } else {
//   newState = Object.assign({}, state, action.kitchens);
// }
// newState = Object.assign({}, state, action.currentUser);
export default kitchenReducer;

import {RECEIVE_RESERVATION, RECEIVE_RESERVATIONS} from '../actions/reservation_actions';


const reservationReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RESERVATION:
    console.log(state);
    console.log(action);
    newState = action.reservation;
    return newState;
    case RECEIVE_RESERVATIONS:
    newState = action.reservations;
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
export default reservationReducer;

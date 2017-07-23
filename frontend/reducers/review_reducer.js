import {RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';


const reviewReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REVIEW:
    console.log(state);
    console.log(action);
    newState = Object.assign({}, state, action.review);
    console.log(newState);
    return newState;
    case RECEIVE_REVIEWS:
    newState = action.reviews;
    return newState;
    default:
      return state;
  }
};

export default reviewReducer;

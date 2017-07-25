// import {RECEIVE_FAVORITE, RECEIVE_FAVORITES} from '../actions/favorite_actions';
//
//
// const favoriteReducer = (state = null, action) => {
//   Object.freeze(state);
//   let newState;
//   newState = Object.assign({}, state);
//   switch (action.type) {
//     case RECEIVE_FAVORITE:
//     newState = Object.assign({}, state, action.favorite);
//     return newState;
//     case RECEIVE_FAVORITES:
//     newState = action.favorites;
//     return newState;
//     default:
//       return state;
//   }
// };
//
// export default favoriteReducer;

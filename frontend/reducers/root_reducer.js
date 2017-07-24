import {combineReducers} from 'redux';
import currentUserReducer from './currentUser_reducer';
import ErrorsReducer from './errors_reducer';
import kitchenReducer from './kitchen_reducer';
import reservationReducer from './reservation_reducer';
import cityReducer from './city_reducer';
import reviewReducer from './review_reducer';
import favoriteReducer from './favorite_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: ErrorsReducer,
  kitchen: kitchenReducer,
  reservation: reservationReducer,
  city: cityReducer,
  review: reviewReducer,
  favorite: favoriteReducer
});

export default rootReducer;

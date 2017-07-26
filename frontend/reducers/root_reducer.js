import {combineReducers} from 'redux';
import currentUserReducer from './currentUser_reducer';
import ErrorsReducer from './errors_reducer';
import kitchenReducer from './kitchen_reducer';
import reservationReducer from './reservation_reducer';
import cityReducer from './city_reducer';
import reviewReducer from './review_reducer';
import favoriteReducer from './favorite_reducer';
import searchReducer from './search_reducer';
import currentKitchenReducer from './currentKitchen_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: ErrorsReducer,
  kitchen: kitchenReducer,
  currentKitchen: currentKitchenReducer,
  reservation: reservationReducer,
  city: cityReducer,
  review: reviewReducer,
  search: searchReducer,
  // favorite: favoriteReducer
});

export default rootReducer;

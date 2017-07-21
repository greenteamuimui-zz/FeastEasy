import {combineReducers} from 'redux';
import currentUserReducer from './currentUser_reducer';
import ErrorsReducer from './errors_reducer';
import kitchenReducer from './kitchen_reducer';
import reservationReducer from './reservation_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: ErrorsReducer,
  kitchen: kitchenReducer,
  reservation: reservationReducer
});

export default rootReducer;

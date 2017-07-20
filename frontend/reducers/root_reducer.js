import {combineReducers} from 'redux';
import currentUserReducer from './currentUser_reducer';
import ErrorsReducer from './errors_reducer';
import kitchenReducer from './kitchen_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: ErrorsReducer,
  kitchen: kitchenReducer
});

export default rootReducer;

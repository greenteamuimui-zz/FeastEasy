import {combineReducers} from 'redux';
import currentUserReducer from './currentUser_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: ErrorsReducer
});

export default rootReducer;

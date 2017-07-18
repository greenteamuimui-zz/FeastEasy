import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import ReduxThunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(ReduxThunk, logger)
  )
);

export default configureStore;

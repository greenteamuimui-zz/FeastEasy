import React from 'react';
import ReactDOM from 'react-dom';
import {fetchKitchens, fetchKitchen, createKitchen} from './actions/kitchen_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchKitchen = fetchKitchen;
  window.fetchKitchens = fetchKitchens;
  window.dateCreate = Date.new;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

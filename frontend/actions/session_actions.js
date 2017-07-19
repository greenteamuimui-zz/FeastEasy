import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
import * as ErrorsAction from '../actions/errors_actions';

export const login = (user) => (dispatch) => {
  return (
    SessionAPIUtil.login(user).then(
      currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const logout = () => (dispatch) => {
  return (
    SessionAPIUtil.logout().then(
      () => {
      dispatch(receiveCurrentUser(null));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const signup = (user) => (dispatch) => {
  return (
    SessionAPIUtil.signup(user).then(
      currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

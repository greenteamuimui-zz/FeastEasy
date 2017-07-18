import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => (dispatch) => {
  return (
    SessionAPIUtil.login(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      error => dispatch(receiveErrors(error.responseJSON))
    )
  );
};

export const logout = () => (dispatch) => {
  return (
    SessionAPIUtil.logout().then(
      () => dispatch(receiveCurrentUser(null)),
      error => dispatch(receiveErrors(error.responseJSON))
    )
  );
};

export const signup = (user) => (dispatch) => {
  return (
    SessionAPIUtil.signup(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      error => dispatch(receiveErrors(error.responseJSON))
    )
  );
};

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

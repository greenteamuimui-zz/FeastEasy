import * as UserAPIUtil from '../util/user_api_util';
import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_USERS = "RECEIVE_USERS";

export const fetchUsers = () => (dispatch) => {
  return (
    UserAPIUtil.fetchUsers().then(
      users => {
      dispatch(receiveUsers(users));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const receiveUsers = (users) => {
  return ({
    type: RECEIVE_USERS,
    users
  });
};

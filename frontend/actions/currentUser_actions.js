import * as UserAPIUtil from '../util/user_api_util';
import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const updateUser = (id, image_url) => (dispatch) => {
  return (
    UserAPIUtil.updateUser(id, image_url).then(
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

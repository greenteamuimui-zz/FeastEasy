import * as FavoriteAPIUtil from '../util/favorite_api_util';
import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";

export const createFavorite = (favorite) => (dispatch) => {
  return (
    FavoriteAPIUtil.createFavorite(favorite).then(
      favorite => {
      dispatch(receiveFavorite(favorite));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const fetchFavorite = (kitchenId, userId) => (dispatch) => {
  return (
    FavoriteAPIUtil.fetchFavorite(kitchenId, userId).then(
      favorite => {
      dispatch(receiveFavorite(favorite));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const removeFavorite = (kitchenId, userId) => (dispatch) => {
  return (
    FavoriteAPIUtil.removeFavorite(kitchenId, userId).then(
      () => {
      dispatch(receiveFavorite(null));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const receiveFavorite = (favorite) => {
  return ({
    type: RECEIVE_FAVORITE,
    favorite
  });
};

// export const receiveFavorite = (favorite) => {
//   return ({
//     type: RECEIVE_FAVORITE,
//     favorite
//   });
// };

import * as KitchenAPIUtil from '../util/kitchen_api_util';
import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_KITCHEN = "RECEIVE_KITCHEN";
export const RECEIVE_KITCHENS = "RECEIVE_KITCHENS";

export const fetchKitchen = (id) => (dispatch) => {
  return (
    KitchenAPIUtil.fetchKitchen(id).then(
      currentKitchen => {
      dispatch(receiveKitchen(currentKitchen));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const fetchKitchens = (search) => (dispatch) => {
  return (
    KitchenAPIUtil.fetchKitchens(search).then(
      kitchens => {
      dispatch(receiveKitchens(kitchens));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const fetchFavoriteKitchens = (ids) => (dispatch) => {
  return (
    KitchenAPIUtil.fetchFavoriteKitchens(ids).then(
      kitchens => {
      dispatch(receiveKitchens(kitchens));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const createKitchen = (kitchen) => (dispatch) => {
  return (
    KitchenAPIUtil.receiveKitchen(kitchen).then(
      kitchen => {
      dispatch(receiveKitchen(kitchen));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};


export const receiveKitchen = (currentKitchen) => {
  return ({
    type: RECEIVE_KITCHEN,
    currentKitchen
  });
};

export const receiveKitchens = (kitchens) => {
  return ({
    type: RECEIVE_KITCHENS,
    kitchens
  });
};

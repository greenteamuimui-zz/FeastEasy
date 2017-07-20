import * as KitchenAPIUtil from '../util/kitchen_api_util';
import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_KITCHEN = "RECEIVE_KITCHEN";
export const RECEIVE_KITCHENS = "RECEIVE_KITCHENS";

export const fetchKitchen = (id) => (dispatch) => {
  return (
    KitchenAPIUtil.fetchKitchen(id).then(
      kitchen => {
      dispatch(receiveKitchen(kitchen));
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


export const receiveKitchen = (kitchen) => {
  return ({
    type: RECEIVE_KITCHEN,
    kitchen
  });
};

export const receiveKitchens = (kitchens) => {
  return ({
    type: RECEIVE_KITCHENS,
    kitchens
  });
};

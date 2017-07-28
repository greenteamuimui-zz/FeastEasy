import * as ReservationAPIUtil from '../util/reservation_api_util';
import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";

export const createReservation = (reservation) => (dispatch) => {
  return (
    ReservationAPIUtil.createReservation(reservation).then(
      reservation => {
      dispatch(receiveReservation(reservation));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const fetchReservations = (kitchenId, date) => (dispatch) => {
  return (
    ReservationAPIUtil.fetchReservations(kitchenId, date).then(
      reservations => {
      dispatch(receiveReservation(reservations));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};


export const receiveReservation = (reservation) => {
  return ({
    type: RECEIVE_RESERVATION,
    reservation
  });
};

export const receiveReservations = (reservations) => {
  return ({
    type: RECEIVE_RESERVATIONS,
    reservations
  });
};

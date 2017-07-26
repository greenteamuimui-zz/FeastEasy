import {connect} from 'react-redux';
import {createReservation, fetchReservations} from '../../actions/reservation_actions';
import {clearErrors} from '../../actions/errors_actions';
import ReservationBox from './reservation_box';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state) => {
  return {
    reservation: state.reservation,
    currentUser: state.currentUser,
    errors: state.errors,
    search: state.search
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  fetchReservations: (kitchenId, date) => dispatch(fetchReservations(kitchenId, date)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter (connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ReservationBox));

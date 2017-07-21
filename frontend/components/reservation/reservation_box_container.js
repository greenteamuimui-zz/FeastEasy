import {connect} from 'react-redux';
import {fetchReservations} from '../../actions/reservation_actions';
import {clearErrors} from '../../actions/errors_actions';
import ReservationBox from './reservation_box';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state) => {
  return {
    reservation: state.reservation
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  fetchReservations: (kitchenId, date) => dispatch(fetchReservations(kitchenId, date)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter (connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ReservationBox));

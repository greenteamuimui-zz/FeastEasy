import {connect} from 'react-redux';
import {fetchReservations} from '../../actions/reservation_actions';
import {clearErrors} from '../../actions/errors_actions';
import ReservationBox from './reservation_box';

const mapStatetoProps = (state) => {
  return {

  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  fetchReservations: (kitchenId) => dispatch(fetchReservations(kitchenId)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ReservationBox  );

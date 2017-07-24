import {connect} from 'react-redux';
import {fetchKitchen} from '../../actions/kitchen_actions';
import {fetchCities} from '../../actions/city_actions';
import {clearErrors} from '../../actions/errors_actions';
import KitchenDetail from './kitchen_detail';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state) => {
  return {
    kitchen: state.kitchen,
    // city: state.city
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  fetchKitchen: (kitchenId) => dispatch(fetchKitchen(kitchenId)),
  // fetchCities: () => dispatch(fetchCities()),
  clearErrors: () => dispatch(clearErrors())
  };
};
// fetchReviews: (kitchenId) => dispatch(fetchReviews(kitchenId)),

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(KitchenDetail));

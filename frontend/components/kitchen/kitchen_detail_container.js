import {connect} from 'react-redux';
import {fetchKitchen} from '../../actions/kitchen_actions';
import {clearErrors} from '../../actions/errors_actions';
import KitchenDetail from './kitchen_detail';

const mapStatetoProps = (state) => {
  return {
    kitchen: state.kitchen
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  fetchKitchen: (kitchenId) => dispatch(fetchKitchen(kitchenId)),
  clearErrors: () => dispatch(clearErrors())
  };
};
// fetchReviews: (kitchenId) => dispatch(fetchReviews(kitchenId)),

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(KitchenDetail);

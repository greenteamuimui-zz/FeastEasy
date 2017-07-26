import {connect} from 'react-redux';
import {fetchKitchens} from '../../actions/kitchen_actions';
import {fetchCities} from '../../actions/city_actions';
import {clearErrors} from '../../actions/errors_actions';
import {sendSearch} from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';
import searchResults from './search_results';


const mapStatetoProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    cities: state.city,
    kitchens: state.kitchen,
    search: state.search,
    errors: state.errors,
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  fetchKitchens: (search) => dispatch(fetchKitchens(search)),
  sendSearch: (search) => dispatch(sendSearch(search)),
  fetchCities: () => dispatch(fetchCities()),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(searchResults));

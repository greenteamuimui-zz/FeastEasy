import {connect} from 'react-redux';
import {fetchKitchens} from '../../actions/kitchen_actions';
import {fetchCities} from '../../actions/city_actions';
import {clearErrors, receiveErrors} from '../../actions/errors_actions';
import {sendSearch, clearSearch} from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form';
import {selectAllCities} from '../../reducers/selectors';


const mapStatetoProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    kitchens: state.kitchen,
    cities: selectAllCities(state),
    search: state.search,
    errors: state.errors,
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  fetchKitchens: (search) => dispatch(fetchKitchens(search)),
  sendSearch: (search) => dispatch(sendSearch(search)),
  clearSearch: () => dispatch(clearSearch(null)),
  fetchCities: () => dispatch(fetchCities()),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: (error) => dispatch(receiveErrors(error.responseJSON)),
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(SearchForm));

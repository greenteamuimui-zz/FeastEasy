import {connect} from 'react-redux';
import {fetchKitchens} from '../../actions/kitchen_actions';
import {fetchCities} from '../../actions/city_actions';
import {clearErrors} from '../../actions/errors_actions';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form';
import {selectAllCities} from '../../reducers/selectors';


const mapStatetoProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    cities: selectAllCities(state),
    errors: state.errors
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  fetchKitchens: (search) => dispatch(fetchKitchens(search)),
  fetchCities: () => dispatch(fetchCities()),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(SearchForm));

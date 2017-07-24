import {connect} from 'react-redux';
import {createFavorite, removeFavorite, fetchFavorite} from '../../actions/favorite_actions';
import {clearErrors} from '../../actions/errors_actions';
import FavoriteButton from './favorite_button';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state) => {
  return {
    favorite: state.favorite,
    currentUser: state.currentUser
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  fetchFavorite: (kitchenId, userId) => dispatch(fetchFavorite(kitchenId, userId)),
  removeFavorite: (kitchenId, userId) => dispatch(removeFavorite(kitchenId, userId)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter (connect(
  mapStatetoProps,
  mapDispatchtoProps
)(FavoriteButton));

import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';
import {clearErrors} from '../../actions/errors_actions';
import ReviewForm from './review_form';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state) => {
  return {
    review: state.review,
    currentUser: state.currentUser,
    errors: state.errors
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  createReview: (review) => dispatch(createReview(review)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter (connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ReviewForm));

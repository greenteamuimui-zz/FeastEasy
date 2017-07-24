import * as ReviewAPIUtil from '../util/review_api_util';
import * as ErrorsAction from '../actions/errors_actions';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const createReview = (review) => (dispatch) => {
  return (
    ReviewAPIUtil.createReview(review).then(
      review => {
      dispatch(receiveReview(review));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const fetchReviews = (kitchenId, date) => (dispatch) => {
  return (
    ReviewAPIUtil.fetchReviews(kitchenId, date).then(
      reviews => {
      dispatch(receiveReviews(reviews));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};


export const receiveReview = (review) => {
  return ({
    type: RECEIVE_REVIEW,
    review
  });
};

export const receiveReviews = (reviews) => {
  return ({
    type: RECEIVE_REVIEWS,
    reviews
  });
};

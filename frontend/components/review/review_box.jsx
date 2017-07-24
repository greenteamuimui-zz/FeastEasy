import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import ReviewBoxItem from './review_box_item';

class ReviewBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    this.props.fetchReviews(this.props.match.params.kitchenId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.kitchenId !== newProps.match.params.kitchenId) {
    newProps.fetchReviews(newProps.match.params.kitchenId);
    }
  }

  render () {
    if (this.props.review === null) {
      return null;
    }
    const {review} = this.props;
    return (
    <div>
      <div className="review-box">
        <h1>Reviews</h1>
        {review.map(indivReview => <ReviewBoxItem key={indivReview.id} review={indivReview} />)}
      </div>
    </div>
    );
  }

}
export default ReviewBox;

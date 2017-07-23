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


  render () {
    console.log(this.props);
    console.log(this.props.review);
    if (this.props.review === null) {
      return null;
    }
    const {review} = this.props;
    console.log(review);
    return (
      <div className="review-box">
        <h1>Reviews</h1>
        {review.map(indivReview => <ReviewBoxItem key={indivReview.id} review={indivReview} />)}
      </div>
    );
  }

}
export default ReviewBox;

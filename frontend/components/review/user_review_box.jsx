import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const UserReviewBox = ({review}) => {
  let picture;
  if (review.kitchenPicture === "") {
    picture = <h1>Picture Coming soon...</h1>;
  } else {
    picture = <Link to={`/kitchens/${review.kitchenId}`}><img src={review.kitchenPicture}/></Link>;
  }
  return (
    <div className="indiv-review">
        <div className="review-info-box">
          <div className="pic-box">
            {picture}
          </div>
            <div className="review-first-box">
              <h1><Link to={`/kitchens/${review.kitchenId}`}>{review.kitchenName}</Link></h1>
              <h2>{review.cityName}</h2>
              <h2>{review.title}</h2>
              <h2>{review.body}</h2>
              <h2>Overall Score:{review.overall_score}</h2>
              <h2>Date: {review.date.slice(0, 10)}</h2>
            </div>
          </div>
    </div>
  );

};

const WrappedUserReviewBox= withRouter(UserReviewBox);
export default WrappedUserReviewBox;

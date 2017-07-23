import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewBoxContainer from '../reservation/reservation_box_container';


const ReviewBoxItem = ({review}) => {
  console.log(review);
  let overall_score = Math.floor(review.overall_score);
  let img_path  = `/assets/score${overall_score}`;
  return (
    <div className="indiv-review">
      <div className="icon">
        <img className="icon" src={img_path} />
        <h2>Overall: {review.overall_score}</h2>
      </div>
      <div className="review-first-box">
        <h2>{review.title}</h2>
        <h3>{review.username}</h3>
        <p>{review.body}</p>
      </div>
      <div className="review-second-box">
        <h3>Food: {review.food_score}</h3>
        <h3>Atmoshere: {review.atmosphere_score}</h3>
        <h3>Host: {review.host_score}</h3>
        <h3>Price: {review.price_score}</h3>
      </div>
    </div>
  );

};


export default ReviewBoxItem;

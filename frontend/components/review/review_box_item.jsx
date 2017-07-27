import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReviewBoxContainer from '../reservation/reservation_box_container';


const ReviewBoxItem = ({review}) => {
  let overall_score = Math.round(review.overall_score);
  let img_path  = `/assets/score${overall_score}.gif`;
  return (
    <div className="indiv-review">
      <div className="icon">
        <img className="icon" src={img_path} />
        <h4>Overall: {review.overall_score}</h4>
      </div>
      <div className="review-first-box">
        <h2>{review.title}</h2>
        <h3>{review.username}</h3>
        <p>{review.body}</p>
      </div>
      <div className="review-second-box">
        <h4><i className="material-icons">restaurant_menu</i>Food: {review.food_score}</h4>
        <h4><i className="material-icons">palette</i>Atmosphere: {review.atmosphere_score}</h4>
        <h4><i className="material-icons">face</i>Host: {review.host_score}</h4>
        <h4><i className="material-icons">attach_money</i>Price: {review.price_score}</h4>
        <h4><i className="material-icons">date_range</i>Date: {review.created_at.slice(0, 10)} </h4>
      </div>
    </div>
  );

};


export default ReviewBoxItem;

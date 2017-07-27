import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchResultsContainer from './search_results_container';


const KitchenBox = ({kitchen}) => {
  console.log(kitchen);
  let review = kitchen.review || {title: "Soon"};
  let picture;
  let score;
  if (kitchen.image_url[0] === undefined) {
    picture = "Pictures Coming Soon";
  } else {
    picture = <img src={kitchen.image_url[0].image_url} />;
  }
  if (kitchen.overall_score === 0) {
    score = "No Score Yet...";
  } else {
    score = kitchen.overall_score;
  }
  return (
    <div className="indiv-kitchen">
        <div className="kitchen-box">
          <div className="pic-box">
            <Link to={`/kitchens/${kitchen.id}`}>{picture}</Link>
          </div>
          <div className="kitchen-box-info">
            <h1><Link to={`/kitchens/${kitchen.id}`}>{kitchen.name}</Link></h1>
            <div className="kitchen-box-about">
              <h2>{kitchen.cuisine}</h2>
              <h2>{score}</h2>
              <h2>{kitchen.address}</h2>
            </div>
          </div>
        </div>
        <div className="kitchen-box-review">
          <div className="review-info">
            <h2>Latest Review</h2>
            <h1>{review.title}</h1>
            <p>{review.body}</p>
          </div>
          <div className="review-scores">
            <h2>Ratings:{review.overall_score}</h2>
            <h2>Food:{review.food_score}</h2>
            <h2>Atmosphere:{review.atmosphere_score}</h2>
            <h2>Host:{review.host_score}</h2>
            <h2>Price:{review.price_score}</h2>
            </div>
        </div>
    </div>
  );

};


export default KitchenBox;

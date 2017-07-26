import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchResultsContainer from './search_results_container';


const KitchenBox = ({kitchen}) => {
  console.log(kitchen);
  let review = kitchen.review || {title: "Soon"};
  let picture;
  if (kitchen.image_url[0] === undefined) {
    picture = "Pictures Coming Soon";
  } else {
    picture = <img src={kitchen.image_url[0].image_url} />;
  }
  return (
    <div className="kitchen-box">
        <h2>{kitchen.name}</h2>
        <h2>{kitchen.cuisine}</h2>
        <h2>{kitchen.overall_score}</h2>
        <div>
          {picture}
        </div>
        <div>
          <h1>Latest Review</h1>
          {review.title}
          {review.body}
          {review.overall_score}
        </div>
    </div>
  );

};


export default KitchenBox;

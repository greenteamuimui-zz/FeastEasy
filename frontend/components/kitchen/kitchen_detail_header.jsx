import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReservationBoxContainer from '../reservation/reservation_box_container';
import ReviewBoxContainer from '../review/review_box_container';
import ReviewFormContainer from '../review/review_form_container';
import FavoriteButtonContainer from '../favorite/favorite_button_container';

// <button onClick={addFavorite}>
//   Favorite
// </button>

const KitchenDetailHeader = ({kitchen, city}) => {
  return (
      <div className='kitchen-right'>
        <div className="kitchen-header-content">
          <h1>
            {kitchen.name}
          </h1>
          <h2>
            {kitchen.cuisine}
          </h2>
          <h2>
            {city}
          </h2>
          <h3>
            Overall Score: {kitchen.overall_score.toFixed(2)}
          </h3>
          <div>
            <FavoriteButtonContainer kitchen={kitchen}/>
          </div>
        </div>

        <div className="kitchen-info">
          <div className='right-first-box'>
            <div className='kitchen-about'>
              <h2>About</h2>
              <p>
                {kitchen.about}
              </p>
            </div>
            <ReservationBoxContainer kitchenSize={kitchen.size} />
            <div className="review-section">
              <ReviewBoxContainer />
              <ReviewFormContainer />
            </div>
          </div>
          <div className='kitchen-details'>
            <h2>Dinner Details</h2>
            <h3><i className="material-icons">access_time</i>Dinner Time</h3>
            <p>
              {kitchen.feast_time}
            </p>
            <h3><i className="material-icons">event_seat</i>Seatings</h3>
            <p>
              {kitchen.size} Max
            </p>
            <h3><i className="material-icons">phone</i>Phone</h3>
            <p>
              {kitchen.phone}
            </p>
            <h3><i className="material-icons">map</i>Address</h3>
            <p>
              {kitchen.address}
            </p>
            </div>
          </div>
      </div>
  );

};

export default withRouter(KitchenDetailHeader);

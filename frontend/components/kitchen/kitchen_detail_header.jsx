import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReservationBoxContainer from '../reservation/reservation_box_container';
import ReviewBoxContainer from '../review/review_box_container';
import ReviewFormContainer from '../review/review_form_container';
import FavoriteButtonContainer from '../favorite/favorite_button_container';

// <button onClick={addFavorite}>
//   Favorite
// </button>

const KitchenDetailHeader = ({kitchen, city, setAnchorRef}) => {
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
          <div className='right-first-box' ref={(el) => setAnchorRef("reservation", el)}>
            <ReservationBoxContainer kitchenSize={kitchen.size} />
            <div className='kitchen-about' ref={(el) => setAnchorRef("about", el)}>
              <h2>About</h2>
              <p>
                {kitchen.about}
              </p>
            </div>
            <div className="review-section" ref={(el) => setAnchorRef("reviews", el)}>
              <ReviewFormContainer />
              <ReviewBoxContainer />
            </div>
          </div>
          <div className='kitchen-details'>
            <h2>Dinner Details</h2>
            <h3><i className="material-icons">access_time</i>Dinner Time</h3>
            <h4>
              {kitchen.feast_time}
            </h4>
            <h3><i className="material-icons">event_seat</i>Seatings</h3>
            <h4>
              {kitchen.size} Max
            </h4>
            <h3><i className="material-icons">phone</i>Phone</h3>
            <h4>
              {kitchen.phone}
            </h4>
            <h3><i className="material-icons">map</i>Address</h3>
            <h4>
              {kitchen.address}
            </h4>
            </div>
          </div>
      </div>
  );

};

export default withRouter(KitchenDetailHeader);

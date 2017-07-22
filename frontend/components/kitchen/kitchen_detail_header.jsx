import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReservationBoxContainer from '../reservation/reservation_box_container';


const KitchenDetailHeader = ({kitchen, city, addFavorite}) => {

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
            Overall Score: {kitchen.overall_score}
          </h3>
          <button onClick={addFavorite}>
            Favorite
          </button>
        </div>

        <div className="kitchen-info">
          <div className='right-first-box'>
            <div className='kitchen-about'>
              <h2>About</h2>
              <p>
                {kitchen.about}
              </p>
            </div>
            <ReservationBoxContainer />
          </div>
          <div className='kitchen-details'>
            <h2>Party Details</h2>
            <h3>Dinner Time</h3>
            <p>
              {kitchen.feast_time}
            </p>
            <h3>Seatings</h3>
            <p>
              {kitchen.size}
            </p>
            <h3>Phone</h3>
            <p>
              {kitchen.phone}
            </p>
            <h3>Address</h3>
            <p>
              {kitchen.address}
            </p>
            </div>
          </div>
      </div>
  );

};

export default withRouter(KitchenDetailHeader);

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
            {kitchen.overall_score}
          </h3>
          <button onClick={addFavorite}>
            Favorite
          </button>
        </div>
        <div className='kitchen-details'>
          <h2>Party Details</h2>
          {kitchen.about}
          {kitchen.phone}
          {kitchen.address}
        </div>
        <ReservationBoxContainer />
      </div>
  );

};

export default withRouter(KitchenDetailHeader);

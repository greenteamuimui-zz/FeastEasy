import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const reservationDetailBox = ({reservation}) => {
  return (
    <div className="indiv-reservation">
        <div className="reservation-info-box">
          <div className="reservation-box-info">
            <h1><Link to={`/reservations/${reservation.id}`}>{reservation.name}</Link></h1>
            <div className="reservation-box-about">
              <h2>{reservation.about}</h2>
              <h2>{reservation.cuisine}</h2>
              <h2>{reservation.address}</h2>
            </div>
          </div>
        </div>
    </div>
  );

};

const WrappedreservationDetailBox= withRouter(reservationDetailBox);
export default WrappedreservationDetailBox;

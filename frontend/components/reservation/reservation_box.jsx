import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class ReservationBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      remainingSeats: 0
    };

  }

  // fetchReservations(date) {
  //   this.props.fetchReservations(this.props.params.match.kitchenId, date);
  //
  // }

  componentWillReceiveProps() {

  }

  // <h2>Select a Date!</h2>
  // <input className="date-selector" type="date"
  //   value={this.state.date}
  //   onChange={this.fetchReservations(this.state.date)}
  //   />
  // <a onClick />

  render () {
    return (
      <div>
        <h1>Reservation</h1>
      </div>
    );
  }

}

export default withRouter(ReservationBox);

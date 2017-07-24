import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class ReservationBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        kitchen_id: this.props.match.params.kitchenId,
        user_id: this.props.currentUser.id,
        seats: 0,
        date: ""
    };

    // this.calculateSeats = this.calculateSeats.bind(this);
    // this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // calculateSeats () {
  //   console.log(this.state.date);
  //   this.props.fetchReservations(this.props.match.params.kitchenId, this.state.date).then(() => {
  //     let reservations = Object.entries(this.props.reservation);
  //     let total_seats = 0;
  //     for (let i = 0; i > reservations.length; i++) {
  //       total_seats +=reservations[i][1].seats;
  //     }
  //     console.log(total_seats);
  //     this.setState({remainingSeats: this.props.kitchenSize - total_seats});
  //   });
  // }

  updateState(property) {
    return (e) => {
      this.setState({[property]: e.currentTarget.value});
    };
  }
  //
  // componentDidMount() {
  //   this.calculateSeats();
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReservation(this.state);
  }


  render () {
    console.log(this.props);
    console.log(this.props.reservation);
    let message = "";
    let kitchenSize = this.props.kitchenSize;
    if (this.props.reservation === null ) {
      message = "Join the Party...";
      console.log(message);
    } else if (Object.keys(this.props.reservation).length === 0) {
      message = "Sorry, it's full!";
    } else {
      message = "See you soon at the party!";
    }
    return (
      <div className="reservation-box">
        <h2>Make A Reservation</h2>
        <form className="reservation-form" onSubmit={this.handleSubmit}>
        <h3>Select Date:</h3>
        <input className="date-selector" type="date"
          value={this.state.date}
          onChange={this.updateState("date")}
          />
        <h3>Party Size:</h3>
        <input className="seats-selector" type="number" min="1" max={kitchenSize}
          value={this.state.seats}
          onChange={this.updateState("seats")}
          />
        <input className="submit-button" type="submit" value="Save your seats"/>
        </form>
        <h4>{message}</h4>
      </div>
    );
  }

}

export default withRouter(ReservationBox);

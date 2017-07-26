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
    this.renderErrors = this.renderErrors.bind(this);
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
  componentDidMount() {
    if (!(this.props.search === null)){
      this.setState({date: this.props.search.date});
      this.setState({seats: this.props.search.size});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReservation(this.state);
  }

  renderErrors() {
    return (
      <p className="errors">
        {this.props.errors[0]}
      </p>
    );
  }


  render () {
    console.log(this.props);
    // console.log(this.props.reservation);
    let message = "";
    let kitchenSize = this.props.kitchenSize;
    if (this.props.reservation === null ) {
      message = "Join the Party...";
    } else if (Object.keys(this.props.reservation).length === 0) {
      message = "Sorry, it's full!";
    } else {
      message = "See you soon at the party!";
    }
    return (
      <div className="reservation-box">
        <h2>Make A Reservation</h2>
        {this.renderErrors()}
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


// <input type="button" name="btn" value="Submit" id="submitBtn" data-toggle="modal" data-target="#confirm-submit" class="btn btn-default" />
// <div class="modal fade" id="confirm-submit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         Confirm Submit
//       </div>
//       <div class="modal-body">
//         Are you sure you want to submit the following details?
//
//         <table class="table">
//           <tr>
//             <th>Last Name</th>
//             <td id="lname"></td>
//           </tr>
//           <tr>
//             <th>First Name</th>
//             <td id="fname"></td>
//           </tr>
//         </table>
//       </div>
//     </div>
//   </div>
// </div>

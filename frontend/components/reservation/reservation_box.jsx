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
    // this.modalState = {
    //   modalState: false;
    // }

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

  closeModal() {
    // this.props.history.push('/');
    this.props.history.goBack();
  }


  render () {

  const customStyles = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(236, 229, 229, 0.75)'
    },
    content : {
      position                   : 'absolute',
      top                        : '30%',
      left                       : '40%',
      right                      : 'auto',
      bottom                     : 'auto',
      border                     : '5px solid #AE1628',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '10px',
      outline                    : 'none',
      padding                    : '20px'
    }
  };

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


      </div>
    );
  }

}

// <Modal
//   className="modal"
//   isOpen={false}
//   contentLabel="Modal"
//   onRequestClose={this.closeModal}
//   style={customStyles}
//   >
//   <h4>{message}</h4>
// </Modal>
export default withRouter(ReservationBox);

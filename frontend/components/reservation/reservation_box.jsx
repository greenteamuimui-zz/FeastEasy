import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';


class ReservationBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        reservation: {
          kitchen_id: this.props.match.params.kitchenId,
          user_id: this.props.currentUser.id,
          seats: 0,
          date: ""
      },
      modalState: false
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // calculateSeats () {
  //   this.props.fetchReservations(this.props.match.params.kitchenId, this.state.date).then(() => {
  //     let reservations = Object.entries(this.props.reservation);
  //     let total_seats = 0;
  //     for (let i = 0; i > reservations.length; i++) {
  //       total_seats +=reservations[i][1].seats;
  //     }
  //     this.setState({remainingSeats: this.props.kitchenSize - total_seats});
  //   });
  // }

  updateState(property) {
    return (e) => {

      let selectedProperty = this.state.reservation;
      selectedProperty[property] = e.currentTarget.value;
      this.setState({selectedProperty});
    };
  }
  //
  componentDidMount() {
    if (!(this.props.search === null)){
      let selectedProperty = this.state.reservation;
      selectedProperty.date = this.props.search.date;
      selectedProperty.seats = this.props.search.size;
      this.setState({selectedProperty});
    }
  }
// this.setState({seats: this.props.search.size});
  handleSubmit(e) {
    e.preventDefault();
    this.props.createReservation(this.state.reservation).then(() => {
      this.openModal();
      let selectedProperty = this.state.reservation;
      selectedProperty.date= "";
      selectedProperty.seats = 0;
      this.setState({selectedProperty});
    });
  }

  renderErrors() {
    return (
      <p className="errors">
        {this.props.errors[0]}
      </p>
    );
  }

  openModal() {
    this.setState({modalState: true});
  }

  closeModal() {
    this.setState({modalState: false});
  }


  render () {
  const customStyles = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'transparent',
    },
    content : {
      position                   : 'absolute',
      top                        : '45%',
      left                       : '35%',
      right                      : 'auto',
      bottom                     : 'auto',
      border                     : '1px solid #651601',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '10px',
      outline                    : 'none',
      padding                    : '30px',
      textalign                 :'center',
      display                     :'flex',
    }
  };

    let message = "";
    let kitchenSize = this.props.kitchenSize;
    if (!(this.props.reservation === null )) {

      if (Object.keys(this.props.reservation).length === 0) {
        message = "Sorry, it's full. Try another day!";
      } else {
      message = "Congrats, you got the seats! See you soon at the party!";
      }
    }
    return (
      <div className="reservation-box">
        <h2>Make A Reservation</h2>
        {this.renderErrors()}
        <form className="reservation-form" onSubmit={this.handleSubmit}>
        <h3>Select Date:</h3>
        <input className="date-selector" type="date"
          value={this.state.reservation.date}
          onChange={this.updateState("date")}
          />
        <h3>Party Size:</h3>
        <input className="seats-selector" type="number" min="1" max={kitchenSize}
          value={this.state.reservation.seats}
          onChange={this.updateState("seats")}
          />
        <input className="submit-button" type="submit" value="Save your seats"/>
        <h4>Join the party...</h4>
        </form>

        <Modal
          className="message-modal"
          isOpen={this.state.modalState}
          contentLabel="Modal"
          onRequestClose={this.closeModal}
          animationType={"fade"}
          style={customStyles}
          >
          <a className ="x" onClick={this.closeModal}>x</a>
          <i className="material-icons">bubble_chart</i><h4>{message}</h4>
        </Modal>


      </div>
    );
  }

}
// <img src="/assets/message.png"/>

export default withRouter(ReservationBox);

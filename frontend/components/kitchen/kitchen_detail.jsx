import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import KitchenDetailHeader from './kitchen_detail_header';
import ReservationBoxContainer from '../reservation/reservation_box_container';
import Scrollchor from 'react-scrollchor';


class KitchenDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    // this.getCityName = this.getCityName.bind(this);
    this.setAnchorRef = this.setAnchorRef.bind(this);
    this.onAnchorClick = this.onAnchorClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchKitchen(this.props.match.params.kitchenId);
    // if (!(this.props.city === null)) {
    //   this.getCityName();
    // }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.kitchenId !== newProps.match.params.kitchenId) {
    this.props.fetchKitchen(newProps.match.params.kitchenId);
    }
  }

  // getCityName() {
  //   this.setState({city: this.props.city[this.props.kitchen.city_id]});
  // }

  // componentWillMount() {
  //   this.props.fetchCities();
  // }


  // if (!this.props.city) {
  //   return null;
  // }

  setAnchorRef (name, el) {
    if (!(this.state[name])) {
      this.setState({[name]: el});
    }
  }

  onAnchorClick (name) {
    return () => {
      const el = this.state[name];
      el.scrollIntoView();
    };
  }


  render () {
    console.log(this.props);
    console.log(this.state);
    // if (Object.keys(this.props.kitchen).length > 1 && Object.keys(this.props.kitchen)[0]) {
    //   console.log("here");
    //   return null;
    // }
    if (!this.props.currentKitchen) {
      console.log("here1");
      return null;
    }
    let kitchen = this.props.currentKitchen;
    let city = this.props.currentKitchen.city_name;
    let favorites = this.props.currentKitchen.favorite_id;
    let pictures = Object.values(kitchen.image_url);
    let picComponent = pictures.map((picture, idx) => {
      return (
      <li key={idx}>
        <div className="pic-box">
          <img className="kitchen-pictures" src={picture.image_url}/>
        </div>
      </li>
      );
    });
    return (
      <div className="kitchen-show">
        <h1 className="white"> </h1>
        <div className= "kitchen-content">
          <div className="kitchen-left">
            <ul className="kitchen-pics">
              {picComponent}
            </ul>
            <div className="anchor-links">
              <p onClick={this.onAnchorClick("about")} className="anchors">About</p>
              <p onClick={this.onAnchorClick("reservation")} className="anchors">Reservation</p>
              <p onClick={this.onAnchorClick("reviews")} className="anchors">Reviews</p>
            </div>
          </div>
          <KitchenDetailHeader kitchen={kitchen} city={city} setAnchorRef={this.setAnchorRef} />
        </div>
      </div>
    );
  }
}

export default withRouter(KitchenDetail);

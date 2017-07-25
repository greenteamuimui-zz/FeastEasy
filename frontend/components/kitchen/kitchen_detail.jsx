import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import KitchenDetailHeader from './kitchen_detail_header';
import ReservationBoxContainer from '../reservation/reservation_box_container';

class KitchenDetail extends React.Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   city: ""
    // };
    // this.getCityName = this.getCityName.bind(this);
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
  render () {
    if (!this.props.kitchen) {
      return null;
    }
    let kitchen = this.props.kitchen;
    let city = this.props.kitchen.city_name;
    let favorites = this.props.kitchen.favorite_id;
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
              <a>About</a>
              <a>reservation</a>
              <a>review</a>
            </div>
          </div>
          <KitchenDetailHeader kitchen={kitchen} city={city} />
        </div>
      </div>
    );
  }
}

export default withRouter(KitchenDetail);

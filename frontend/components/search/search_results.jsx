import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import SearchFormContainer from  '../header/search_form_container';
import KitchenBox from  './kitchen_box';
import qs from 'query-string';

class searchResults extends React.Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   city: this.props.city[this.props.search.city_id]
    // };
    // this.getSearch = this.getSearch.bind(this);
  }

  getSearch () {
    const query = qs.parse(this.props.location.search);
    return ({
      city_id: query["cityId"],
      size: query["size"],
      date: query["date"],
      search_string: query["searchString"]
    });
  }

  // componentWillMount(){
  //   console.log("sr-here1");
  //   this.props.fetchKitchens(this.getSearch());
  //   this.props.sendSearch(this.getSearch());
  //   if (!(this.props.search === null)) {
  //     this.setState(this.props.search);
  //     }
  // }

  componentDidMount() {
    console.log("here");
    this.props.fetchKitchens(this.getSearch());
    if (this.props.cities === null) {
      this.props.fetchCities();
    }
    this.props.sendSearch(this.getSearch());
    if (!(this.props.search === null)) {
      this.setState(this.props.search);
    }
  }

// typeof(kitchens) === 'object'
  render() {
    let city = "";
    let kitchens = "";
    let kitchensMap = "";
    if( (!(this.props.cities === null)) || (!(this.props.search === null)) ) {
      if (this.props.search.city_id === undefined) {
        city = this.props.cities[qs.parse(this.props.location.search)["cityId"]];
      } else {
        city = this.props.cities[this.props.search.city_id];
      }
    }
    if (!(this.props.kitchens === null|| this.props.search === null)) {
      kitchens = Object.values(this.props.kitchens);
    }
    if (Object.keys(kitchens).length > 0) {
      kitchensMap = kitchens.map((kitchen, idx) => <KitchenBox key={idx} kitchen={kitchen}/>);
    } else {
      kitchensMap = <h5>Coming Soon...</h5>;
    }
    return (
      <div className="search-results">
        <div className="city-photo">
          <h6>{city.name}</h6>
          <img src={city.photo_url} />
        </div>
        <SearchFormContainer/ >
        {kitchensMap}
      </div>
    );
  }
}
// {kitchens.map((kitchen, idx) => <KitchenBox key={idx} kitchen={kitchen} />)}


export default searchResults;

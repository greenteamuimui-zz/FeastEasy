import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import SearchFormContainer from  '../header/search_form_container';
import KitchenBox from  './kitchen_box';

class searchResults extends React.Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   city: this.props.city[this.props.search.city_id]
    // };
    // this.getSearch = this.getSearch.bind(this);
  }

  getSearch () {
    let searchString;
    if (this.props.match.params.searchString === "none") {
      searchString = "";
    }
    return ({
      city_id: this.props.match.params.cityId,
      size: this.props.match.params.size,
      date: this.props.match.params.date,
      search_string: searchString
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
    if (!(this.props.cities === null || this.props.kitchens === null|| this.props.search === null)) {
      city = this.props.cities[this.props.search.city_id];
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

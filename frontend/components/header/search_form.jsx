import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SearchForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      city_id: "",
      size: "1",
      date: "",
      search_string:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateState = this.updateState.bind(this);
    this.getSearch = this.getSearch.bind(this);

  }

  // componentDidMount(){
  //   this.props.fetchCities();
  //   if (!(this.props.search === null)) {
  //     this.setState(this.props.search);
  //   }
  // }

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

 componentDidMount() {
   console.log("form");
   if (this.props.location.pathname === "/") {
     this.props.fetchCities();
     this.props.clearSearch();
   } else {
    this.props.fetchCities();
     this.props.sendSearch(this.getSearch());
     this.setState(this.getSearch());
      }
  }


  componentWillReceiveProps (newProps) {
    if (newProps.location.pathname === "/") {
      this.setState({
        city_id: newProps.cities[0].id,
        size: "1",
        date: "",
        search_string:""
      });
    } else if(!(newProps.search === null)) {
      this.setState(newProps.search); }
    // } else if(this.props.cities !== newProps.cities) {
    //   this.setState({city_id: newProps.cities[0].id});
    // }
  }

  handleSubmit(e) {
    e.preventDefault();
    let string = this.state.search_string || "none";
    this.props.sendSearch(this.state);
    this.props.fetchKitchens(this.state);
    this.props.history.push(`/searchResults/${this.state.city_id}.${this.state.size}.${this.state.date}.${string}`);
  }


  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.fetchKitchens(this.state).then(() => {
      // this.props.sendSearch(this.state);
  //     let string = this.state.search_string || "none";
  //     this.props.history.push(`/searchResults/${this.state.city_id}.${this.state.size}.${this.state.date}.${string}`);
  //     // this.props.history.push(`/searchResults/${this.state.city_id}/${this.state.size}/${this.state.date}/${string}`);
  //     // this.props.history.push({
  //     //   pathname:'/searchResults',
  //     //   cityId: this.state.city_id,
  //     //   size: this.state.size,
  //     //   date: this.state.date,
  //     //   searchString: this.state.search_string
  //     // });
  //     // this.setState({
  //     //   city_id: "",
  //     //   size: "1",
  //     //   date: "",
  //     //   search_string:""
  //     // });
  //   });
  // }

  updateState(property) {
    return (e) => {
      this.setState({[property]:e.currentTarget.value});
    };
  }

  renderErrors() {
    return (
      <p className="errors">
        {this.props.errors[0]}
      </p>
    );
  }

  render () {
    let cities;
    if (this.props.cities === null) {
      return null;
    } else {
      cities = this.props.cities;
    }
    return(
      <div>
        {this.renderErrors()}
        <form className="search-form" onSubmit={this.handleSubmit}>
          <h3>City:</h3>
          <div className="styled-select black rounded">
            <select value={this.state.city_id} onChange={this.updateState('city_id')}>
            {cities.map((city,  idx) => <option key={idx} value={city.id}>{city.name}</option>)}
            </select>
          </div>
          <h3>Date:</h3>
          <input className="date-selector" type="date"
            value={this.state.date}
            onChange={this.updateState("date")}
            />
          <h3>Seats:</h3>
          <input className="seats-selector" type="number" min="1" max="12"
            value={this.state.size}
            onChange={this.updateState("size")}
            />
          <input className="string-input" type="text" value={this.state.search_string} placeholder="Cuisine, Name, etc.."
          onChange={this.updateState("search_string")} />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default SearchForm;

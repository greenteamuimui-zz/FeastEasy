import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import qs from 'query-string';

class SearchForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      city_id: "",
      size: "1",
      date: (new Date()).toISOString().slice(0, 10),
      search_string:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateState = this.updateState.bind(this);
    this.getSearch = this.getSearch.bind(this);

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

 componentDidMount() {
  this.props.fetchCities();
  this.props.sendSearch(this.getSearch());
  this.setState(this.getSearch());
}


componentWillReceiveProps (newProps) {
  if(newProps.cities){
    if(!this.state.city_id){
      this.setState({
        city_id: newProps.cities[0].id
      });
    }
    if(!this.state.date){
      this.setState({
        date: (new Date()).toISOString().slice(0, 10),
      });
    }
    if(!this.state.size){
      this.setState({
        size:1
      });
    }

  }
}

  handleSubmit(e) {
    e.preventDefault();
    let string = this.state.search_string || "";
    this.props.sendSearch(this.state);
    this.props.fetchKitchens(this.state);
    const params = {
      cityId: this.state.city_id,
      size: this.state.size,
      date: this.state.date,
      searchString: string
    };
    const psearch = qs.stringify(params);
    this.props.history.push(`/searchResults?${psearch}`);
  }
  
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

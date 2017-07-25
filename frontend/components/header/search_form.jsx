import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SearchForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      city_id: "1",
      size: "1",
      date: "",
      search_string:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    this.props.fetchCities();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchKitchens(this.state).then(() => {
      this.setState({
        city_id: "1",
        size: "1",
        date: "",
        search_string:""
      });
    });
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
          <h2>City</h2>
          <div className="styled-select black rounded">
            <select value={this.state.city_id} onChange={this.updateState('city_id')}>
            {cities.map((city,  idx) => <option key={idx} value={city.id}>{city.name}</option>)}
            </select>
          </div>
          <h2>Select Date:</h2>
          <input className="date-selector" type="date"
            value={this.state.date}
            onChange={this.updateState("date")}
            />
          <h2>Seats</h2>
          <input className="seats-selector" type="number" min="1" max="12"
            value={this.state.size}
            onChange={this.updateState("size")}
            />
          <h2>Cuisine, Name</h2>
          <input className="input" type="text" value={this.state.search_string}
          onChange={this.updateState('search_string')} />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default SearchForm;

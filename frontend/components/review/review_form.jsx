import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      kitchen_id: this.props.match.params.kitchenId,
      user_id: this.props.currentUser.id,
      title: "",
      body: "" ,
      food_score: "1",
      atmosphere_score: "1",
      host_score: "1",
      price_score: "1",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount () {
    // this.props.fetchReviews(this.props.match.params.kitchenId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }

  renderErrors() {
    return (
      <p className="errors">
        {Object.values(this.props.errors).map((error, idx) =>
          <li key={idx}>
          {error}
          </li>)}
      </p>
    );
  }

  updateState(property) {
    return (e) => {
      this.setState({[property]:e.currentTarget.value});
    };
  }


  render () {
    console.log(this.props);
    if (this.props.review === null) {
      return null;
    }
    return (
    <div>
      <header>Submit A Review</header>
      {this.renderErrors()}
      <form className="review-form" onSubmit={this.handleSubmit}>
      <h2>Title</h2>
        <input className="input" type="text" value={this.state.title}
        onChange={this.updateState('title')} />
      <h3>Body</h3>
        <input className="input" type="text" value={this.state.body}
        onChange={this.updateState('body')} />
      <div className="radio-ratings">
        <div className="radio-food">
          <h3><i className="material-icons">restaurant_menu</i>Food:</h3>
          <input type="radio" value="1"
            checked={this.state.food_score === "1"}
            onChange={this.updateState('food_score')} />
          <input type="radio" value="2"
            checked={this.state.food_score === "2"}
            onChange={this.updateState('food_score')} />
          <input type="radio" value="3"
            checked={this.state.food_score === "3"}
            onChange={this.updateState('food_score')} />
          <input type="radio" value="4"
            checked={this.state.food_score === "4"}
            onChange={this.updateState('food_score')} />
          <input type="radio" value="5"
            checked={this.state.food_score === "5"}
            onChange={this.updateState('food_score')} />
        </div>

        <div className="radio-atmosphere">
          <h3><i className="material-icons">palette</i>Atmosphere:</h3>
          <input type="radio" value="1"
            checked={this.state.atmosphere_score === "1"}
            onChange={this.updateState('atmosphere_score')} />
          <input type="radio" value="2"
            checked={this.state.atmosphere_score === "2"}
            onChange={this.updateState('atmosphere_score')} />
          <input type="radio" value="3"
            checked={this.state.atmosphere_score === "3"}
            onChange={this.updateState('atmosphere_score')} />
          <input type="radio" value="4"
            checked={this.state.atmosphere_score === "4"}
            onChange={this.updateState('atmosphere_score')} />
          <input type="radio" value="5"
            checked={this.state.atmosphere_score === "5"}
            onChange={this.updateState('atmosphere_score')} />
        </div>

        <div className="radio-host">
          <h3><i className="material-icons">face</i>Host:</h3>
          <input type="radio" value="1"
            checked={this.state.host_score === "1"}
            onChange={this.updateState('host_score')} />
          <input type="radio" value="2"
            checked={this.state.host_score === "2"}
            onChange={this.updateState('host_score')} />
          <input type="radio" value="3"
            checked={this.state.host_score === "3"}
            onChange={this.updateState('host_score')} />
          <input type="radio" value="4"
            checked={this.state.host_score === "4"}
            onChange={this.updateState('host_score')} />
          <input type="radio" value="5"
            checked={this.state.host_score === "5"}
            onChange={this.updateState('host_score')} />
        </div>

        <div className="radio-price">
          <h3><i className="material-icons">attach_money</i>Price:</h3>
          <input type="radio" value="1"
            checked={this.state.price_score === "1"}
            onChange={this.updateState('price_score')} />
          <input type="radio" value="2"
            checked={this.state.price_score === "2"}
            onChange={this.updateState('price_score')} />
          <input type="radio" value="3"
            checked={this.state.price_score === "3"}
            onChange={this.updateState('price_score')} />
          <input type="radio" value="4"
            checked={this.state.price_score === "4"}
            onChange={this.updateState('price_score')} />
          <input type="radio" value="5"
            checked={this.state.price_score === "5"}
            onChange={this.updateState('price_score')} />
        </div>
      </div>
      <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
    );
  }

}
export default ReviewForm;

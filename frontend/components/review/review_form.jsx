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
    this.setState({title: "",
    body: "",
    food_score: "1",
    atmosphere_score: "1",
    host_score: "1",
    price_score: "1",});
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
    if (this.props.review === null) {
      return null;
    }
    return (
    <div className='review-form-box'>
      <h1>Submit A Review</h1>
      {this.renderErrors()}
      <form className="review-form" onSubmit={this.handleSubmit}>
      <div className="review-form-left">
        <h2>Title</h2>
          <input className="input" type="text" value={this.state.title}
          onChange={this.updateState('title')} />
        <h3>Body</h3>
          <textarea className="input-body" type="text" value={this.state.body}
          onChange={this.updateState('body')} />
      </div>
      <div className="review-form-right">
        <div className="radio-atmosphere">
          <h4><i className="material-icons">palette</i>Atmosphere:
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
          </h4>
        </div>

        <div className="radio-food">
          <h4><i className="material-icons">restaurant_menu</i>Food:
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
          </h4>
        </div>


        <div className="radio-host">
          <h4><i className="material-icons">face</i>Host:
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
          </h4>
        </div>

        <div className="radio-price">
          <h4><i className="material-icons">attach_money</i>Price:
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
          </h4>
        </div>
        <input className="submit-button" type="submit" value="Submit" />
      </div>
      </form>
    </div>
    );
  }

}
export default ReviewForm;

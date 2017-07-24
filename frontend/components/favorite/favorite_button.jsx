import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class FavoriteButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      kitchenId: this.props.match.params.kitchenId,
      userId: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    if (Object.keys(this.props.favorite).length === 0) {
      this.props.createFavorite(this.state);
    } else {
      this.props.removeFavorite(this.state);
    }
  }

  componentDidMount () {
    this.props.fetchFavorite(this.state.kitchenId, this.state.userId);
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.kitchenId !== newProps.match.params.kitchenId) {
  //   newProps.fetchFavorite(newProps.match.params.kitchenId, this.state.userId);
  //   }
  // }

  render () {
    console.log(this.props);
    if (this.props.favorite === null) {
      return null;
    }
    if (Object.keys(this.props.favorite).length === 0) {
      return (
        <div>
          <button onClick={this.handleSubmit}>X</button>
        </div>
      );
    } else {
    return (
      <div>
        <button onClick={this.handleSubmit}>Y</button>
      </div>
    );
    }
  }
}

export default FavoriteButton;

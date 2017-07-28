import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class FavoriteButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      favorite: {
        kitchen_id: this.props.match.params.kitchenId,
        user_id: this.props.currentUser.id,
      },
      favorited: this.initialState(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  initialState (){
    if (this.props.kitchen.favorite_id.includes(this.props.currentUser.id)) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.favorited === false) {
      this.props.createFavorite(this.state.favorite).then(() => {
        this.setState({favorited: true});
      });
    } else {
      this.props.removeFavorite(this.props.match.params.kitchenId, this.props.currentUser.id).then(() => {
        this.setState({favorited: false});
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.kitchen.id !== newProps.kitchen.id) {
      let favorite = false;
      if (newProps.favArray.includes(newProps.currentUser.id)) {
        favorite = true;
      }
      this.setState({
        favorite: {
          kitchen_id: newProps.match.params.kitchenId,
          user_id: newProps.currentUser.id,
        },
        favorited: favorite
      });
    }
  }

  render () {
    let button;
    if (this.state.favorited === false) {
      button = <div className="favorite" onClick={this.handleSubmit}>
              <i className="material-icons">favorite_border</i><h3>Favorite</h3>
              </div>;
    } else {
      button = <div className="favorite" onClick={this.handleSubmit}><i className="material-icons">favorite</i><h3>Favorite</h3></div>;
    }
      return (
        <div>
          {button}
        </div>
      );
  }
}
// if (this.state.favorited === false) {
//   button = <button onClick={this.handleSubmit}><i className="material-icons">favorite_border</i><h3>Favorite</h3></button>;
// } else {
//   button = <button onClick={this.handleSubmit}><i className="material-icons">favorite</i><h3>Favorite</h3></button>;
// }

export default FavoriteButton;

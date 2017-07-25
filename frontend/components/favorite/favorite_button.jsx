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
    // let state = Boolean(!this.state.favorited);
    // this.setState({favorited:state});
  }

  // componentDidMount () {
  //   this.props.fetchFavorite(this.state.kitchenId, this.state.userId);
  // }

  componentWillReceiveProps(newProps) {
    console.log(this.props);
    console.log(newProps);
    if (this.props.kitchen.id !== newProps.kitchen.id) {
      let favorite = false;
      if (newProps.favArray.includes(newProps.currentUser.id)) {
        favorite = true;
      }
      console.log(favorite);
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
    // console.log(this.props);
    // console.log(this.state);
    let button;
    if (this.state.favorited === false) {
      button = <button onClick={this.handleSubmit}><i className="material-icons">favorite_border</i>Add</button>;
    } else {
      button = <button onClick={this.handleSubmit}><i className="material-icons">favorite</i>Delete</button>;
    }
      return (
        <div>
          {button}
        </div>
      );
  }
}

export default FavoriteButton;

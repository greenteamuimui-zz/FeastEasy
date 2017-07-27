import React from 'react';
import UserFormContainer from './user_form_container';
import ReviewBoxItem from '../review/review_box_item';
import WrappedfavKitchenBox from '../kitchen/favKitchen_box';
import {Link, withRouter } from 'react-router-dom';


class UserDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }
  render() {
    const {currentUser} = this.props;
    let picture;
    if (currentUser.image_url === "") {
      picture = <UserFormContainer />;
    } else {
      picture = <img src={currentUser.image_url }/>;
    }
    return (
      <div>
        <h1>User Page</h1>
        {currentUser.image_url === null &&
          <UserFormContainer />
        }
        {typeof(currentUser.image_url) === 'string' &&
          <img src={currentUser.image_url}/>
        }
        <h2>{currentUser.username}</h2>
        <div>
          <h2>Favorites</h2>
          {currentUser.favorites.map((kitchen, idx) => <WrappedfavKitchenBox kitchen={kitchen} pictures={currentUser.pictures} key={idx} />)}
        </div>
        <div>
          <h2>Reviews</h2>
          {currentUser.reviews.map((review, idx) => <ReviewBoxItem review={review} key={idx} />)}
        </div>
      </div>
    );
  }
}

export default UserDetail;

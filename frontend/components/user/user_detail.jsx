import React from 'react';
import UserForm from './user_form';
import ReviewBoxItem from '../review/review_box_item';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    const {currentUser} = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>User Page</h1>
        <h2>{currentUser.username}</h2>
        <div>
          <h2>Favorites</h2>
        </div>
        <div>
          <h2>Reviews</h2>
          {currentUser.review.map((review, idx) => <ReviewBoxItem review={review} key={idx} />)}
        </div>
      </div>
    );
  }
}

export default UserDetail;

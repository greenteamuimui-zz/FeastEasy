import React from 'react';
import UserFormContainer from './user_form_container';
import ReviewBoxItem from '../review/review_box_item';
import WrappedfavKitchenBox from '../kitchen/favKitchen_box';
import WrappedUserReviewBox from '../review/user_review_box';
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
      <div className="mypage-bg">
        <div className="mypage">
          <div className="user-info">
              <div className="user-pic-box">
                {currentUser.image_url === null &&
                  <UserFormContainer />
                }
                {typeof(currentUser.image_url) === 'string' &&
                  <img src={currentUser.image_url}/>
                }
              </div>
              <div className="user-details">
              <i className="material-icons">face</i><h1>{currentUser.username}</h1>
              <i className="material-icons">email</i><h2>{currentUser.email}</h2>
              <i className="material-icons">cake</i><h2>Joined The Party: {currentUser.joinDate.slice(0, 10)}</h2>
              </div>
            </div>
          <div className="userpage-right">
            <h6>User Details</h6>
            <h3>Favorites</h3>
            <div className="user-favs">
              {currentUser.favorites.map((kitchen, idx) => <WrappedfavKitchenBox kitchen={kitchen} pictures={currentUser.pictures} key={idx} />)}
            </div>
            <div>
            <h3>Reviews</h3>
              {currentUser.reviews.map((review, idx) => <WrappedUserReviewBox review={review} key={idx} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// <div>
//   <h2>Reservations</h2>
//   {currentUser.reservations.map((reservation, idx) => <WrappedreservationDetailBox reservation={reservation} key={idx} />)}
// </div>

export default UserDetail;

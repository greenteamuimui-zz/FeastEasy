import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import UserBox from './user_box';
import Slider from 'react-slick';


class UserIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    // let usersMap;
    // if (!(this.props.users === null)) {
    //   const users = Object.values(this.props.users);
    //   usersMap = users.map((user, idx) => <UserBox key={idx} user={user}/>);
    // } else {
    //   usersMap = <h5>Coming Soon...</h5>;
    // }
    let usersMap;
    if (!(this.props.users === null)) {
      const users = Object.values(this.props.users);
      usersMap = users.map((user, idx) => {
        return (
          <div>
            <UserBox key={idx} user={user}/>
          </div>
        );
      });
    } else {
      usersMap =[];
    }
    return(
      <div>
        {usersMap.length && <Slider {...settings}>{usersMap}</Slider>}
      </div>
    );
  }
}

// {usersMap}

export default UserIndex;

import {connect} from 'react-redux';
import {logout, login} from '../../actions/session_actions';
import Header from './header';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state) => ({
  currentUser: state.currentUser
});

const mapDispatchtoProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  logInAsGuest: (user) => dispatch(login(user))
});


export default withRouter (connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Header));

import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Header from './header';

const mapStatetoProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchtoProps = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Header);

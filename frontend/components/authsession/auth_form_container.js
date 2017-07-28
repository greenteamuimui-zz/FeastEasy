import {connect} from 'react-redux';
import {login, signup} from '../../actions/session_actions';
import {clearErrors} from '../../actions/errors_actions';
import AuthForm from './auth_form';
import { withRouter } from 'react-router-dom';


const mapStatetoProps = (state, ownProps) => {
  return {
  loggedIn: Boolean(state.currentUser),
  errors: state.errors,
  formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login") ? login : signup;
  return {
  processForm: (user) => dispatch(processForm(user)),
  clearErrors: () => dispatch(clearErrors()),
  logInAsGuest: (user) => dispatch(login(user))
  };
};


export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AuthForm));

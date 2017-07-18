import {connect} from 'react-redux';
import {login, signup} from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStatetoProps = ({session}, ownProps) => {
  return {
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login") ? login : signup;
  return {
  processForm: (user) => dispatch(processForm(user)),
  };
};


export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AuthForm);

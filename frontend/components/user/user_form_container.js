import {connect} from 'react-redux';
import {clearErrors} from '../../actions/errors_actions';
import { withRouter } from 'react-router-dom';
import UserForm from './user_form';
import {updateUser} from '../../actions/currentUser_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  updateUser: (id, image_url) => dispatch(updateUser(id, image_url)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(UserForm));

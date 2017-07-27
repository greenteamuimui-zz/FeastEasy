import {connect} from 'react-redux';
import {clearErrors} from '../../actions/errors_actions';
import { withRouter } from 'react-router-dom';
import UserDetail from './user_detail';

const mapStatetoProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(UserDetail));

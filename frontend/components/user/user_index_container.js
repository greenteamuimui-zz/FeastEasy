import {connect} from 'react-redux';
import {clearErrors} from '../../actions/errors_actions';
import { withRouter } from 'react-router-dom';
import {fetchUsers} from '../../actions/user_actions';
import UserIndex from './user_index';

const mapStatetoProps = (state, ownProps) => {
  return {
    users: state.user,
  };
};


const mapDispatchtoProps = (dispatch) => {
  return {
  fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(UserIndex));

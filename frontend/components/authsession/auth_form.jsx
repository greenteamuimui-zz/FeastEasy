import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Modal from 'react-modal';

class AuthForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateState = this.updateState.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.location.pathname !== nextProps.location.pathname){
    this.props.clearErrors();
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  } else if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  updateState(property) {
    return (e) => {
      this.setState({[property]:e.currentTarget.value});
    };
  }

  renderErrors() {
    return (
      <p className="errors">
        {this.props.errors[0]}
      </p>
    );
  }

  closeModal() {
    this.props.history.push('/');
  }

  render () {

    // Modal Styling
    const customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(236, 229, 229, 0.75)'
      },
      content : {
        position                   : 'absolute',
        top                        : '30%',
        left                       : '40%',
        right                      : 'auto',
        bottom                     : 'auto',
        border                     : '5px solid #AE1628',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '10px',
        outline                    : 'none',
        padding                    : '20px'
      }
    };

    // determine what to render
    const formType = this.props.formType;
    let emailInput = null;
    let message = "Log In";
    let otherlink = <Link to="/signup">Create an account here!</Link>;
    if (formType === "signup") {
      message = "Sign Up"
      emailInput=
      <label className="extra">
        <h2>Email Address</h2>
        <input className="input" type="text"
          value={this.state.email}
          onChange={this.updateState("email")}
          className="auth-email" />
      </label>;
      otherlink =
      <Link className="link-to-other" to="/login">Already Signed up? Log In here</Link>;
    }

      return (
        <div className="search-bar">
          <Modal
            className="modal"
            isOpen={true}
            contentLabel="Modal"
            onRequestClose={this.closeModal}
            style={customStyles}
            >
              <header>Please {message}!</header>
              <a className ="x" onClick={this.closeModal}>x</a>
              {this.renderErrors()}
              <form className="auth-form" onSubmit={this.handleSubmit}>
                {emailInput}
                <h2>Username</h2>
                <input className="input" type="text" value={this.state.username}
                onChange={this.updateState('username')} />
                <h2>Password</h2>
                <input className="input" type="password" value={this.state.password}
                onChange={this.updateState('password')} />
              <input className="submit-button" type="submit" value="Join Us" />
              </form>
              {otherlink}
          </Modal>
        </div>
      );
  }
}

export default withRouter(AuthForm);

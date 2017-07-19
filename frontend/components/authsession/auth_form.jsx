import React from 'react';
import {Link, withRouter} from 'react-router-dom';

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
    // const user = Object.assign({}, {user: this.state});
    this.props.processForm(this.state);
  }

  updateState(property) {
    return (e) => {
      this.setState({[property]:e.currentTarget.value});
    };
  }

  renderErrors() {
    return (
      <p>
        {this.props.errors[0]}
      </p>
    );
  }



  render () {
    const formType = this.props.formType;
    let emailInput = null;
    if (formType === "signup") {
      emailInput=
      <label>
        <h2>Email Address</h2>
        <input type="text"
          value={this.state.email}
          onChange={this.updateState("email")}
          className="auth-email" />
      </label>;
    }

      return (
        <div>
          <header>Please {formType}!</header>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            {emailInput}
            <h2>Username</h2>
            <input type="text" value={this.state.username}
            onChange={this.updateState('username')} />
            <h2>Password</h2>
            <input type="password" value={this.state.password}
            onChange={this.updateState('password')} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
  }
}

export default withRouter(AuthForm);

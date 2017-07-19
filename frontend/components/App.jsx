import React from 'react';
import HeaderContainer from './header/header_container';
import AuthFormContainer from './authsession/auth_form_container';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';


const App = () => (
  <div>
    <div className="static">
    <header className="app-header">
      <div className="app-left">
        <img className="s-logo" src="/assets/logo2.png" alt="logo"/>
        <h1>Feast Easy</h1>
      </div>
      <HeaderContainer />
    </header>

    <div className="search-bar">
      <img className="main" src="http://res.cloudinary.com/greenteamuimui/image/upload/c_scale,r_30,w_1182/v1500496835/imageedit_5_8288987673_i4iq3j.png" alt="main"/>
      <section>
        <h2>
          Join the next dinner party!
        </h2>
        <h3>
          Find your favorite kitchen now...
        </h3>
      </section>
    </div>

  </div>
    <Switch>
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
    </Switch>
  </div>
);

export default App;

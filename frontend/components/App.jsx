import React from 'react';
import HeaderContainer from './header/header_container';
import AuthFormContainer from './authsession/auth_form_container';
import {Route, Switch} from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <h1>App Header</h1>
      <HeaderContainer />
    </header>
    <Route path="/login" component={AuthFormContainer} />
    <Route path="/signup" component={AuthFormContainer} />
  </div>
);

export default App;

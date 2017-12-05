import React from 'react';
import HeaderContainer from './header/header_container';
import AuthFormContainer from './authsession/auth_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import KitchenDetailContainer from './kitchen/kitchen_detail_container';
import SearchBar from './header/searchbar';
import SearchFormContainer from './header/search_form_container';
import searchResultsContainer from './search/search_results_container';
import UserDetailContainer from './user/user_detail_container';
import UserIndexContainer from './user/user_index_container';

// <img className="main" src="https://res.cloudinary.com/greenteamuimui/image/upload/c_scale,r_30,w_1182/v1500496835/imageedit_5_8288987673_i4iq3j.png" alt="main"/>

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    return (
        <div className='app'>
          <div className="static">
          <header className="app-header">
            <div className="app-left">
              <Link to="/">
                <img className="s-logo" src="https://res.cloudinary.com/greenteamuimui/image/upload/v1500503298/apron_hyqxck.png" alt="logo"/>
              </Link>
              <Link to="/">
                <h1>Feast Easy</h1>
              </Link>
            </div>
            <HeaderContainer />
          </header>
          </div>
        <Switch>
          <Route exact path="/" component={()=> <div><SearchBar/><UserIndexContainer/></div>}/>
          <AuthRoute exact path="/login" component={AuthFormContainer} />
          <AuthRoute exact path="/signup" component={AuthFormContainer} />
          <ProtectedRoute path="/kitchens/:kitchenId" component={KitchenDetailContainer} />
          <ProtectedRoute path="/myPage" component={UserDetailContainer} />
          <Route path="/searchResults" component={searchResultsContainer}/>
        </Switch>
      </div>
    );
  }
}
// <Route exact path="/" component={() => <div className="searchbar">{SearchBar}</div>}/>

// const App = () => (
//   <div className='app'>
//     <div className="static">
//     <header className="app-header">
//       <div className="app-left">
//         <Link to="/">
//           <img className="s-logo" src="https://res.cloudinary.com/greenteamuimui/image/upload/v1500503298/apron_hyqxck.png" alt="logo"/>
//         </Link>
//         <Link to="/">
//           <h1>Feast Easy</h1>
//         </Link>
//       </div>
//       <HeaderContainer />
//     </header>
//
//
//     </div>
//     <Switch>
//       <Route exact path="/" component={SearchBar} />
//       <AuthRoute exact path="/login" component={AuthFormContainer} />
//       <AuthRoute exact path="/signup" component={AuthFormContainer} />
//       <ProtectedRoute path="/kitchens/:kitchenId" component={KitchenDetailContainer} />
//       <ProtectedRoute path="/myPage" component={UserDetailContainer} />
//       <Route path="/searchResults" component={searchResultsContainer}/>
//     </Switch>
//   </div>);
//   // <Route exact path="/" component={UserIndexContainer} />
// <Route path="/searchResults/:cityId.:size.:date.:searchString" component={searchResultsContainer}/>
export default App;

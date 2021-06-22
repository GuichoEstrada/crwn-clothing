import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './component/header/header.component';
import Homepage from './pages/homepage/hompage.component';
import Shoppage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';
import { auth } from './component/firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/sign-in' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import './App.css';

import Header from './component/header/header.component';
import Homepage from './pages/homepage/hompage.component';
import Shoppage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component';
import Checkoutpage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './component/firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
  
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)} />
          <Route exact path='/checkout' component={Checkoutpage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
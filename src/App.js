import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component.jsx'
import Header from './components/header/header.component'
import {auth, createUserProfileUserDocument} from './firebase/firebase.util';
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if(user) { 
        const userRef = await createUserProfileUserDocument(user);
        userRef.onSnapshot((snap) => {
          setCurrentUser({
            id: snap.id,
            ...snap.data()
          })
        });
      } 
      setCurrentUser(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();  
  }

  render () {
    return (
      <div> 
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ?
            (
              <Redirect to='/' /> 
            ) :  
            (
              <SignInAndSignupPage/>
            )
          }
          />
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

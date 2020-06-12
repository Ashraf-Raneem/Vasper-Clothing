import React from 'react';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom' 
import {createStructuredSelector} from 'reselect'
import {auth , createUserProfileDocument} from './firebase/firebase.utils'; 
import { setCurrentUser } from './redux/user/user.actions';
import {connect} from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector';

import Header from './component/header/header.component'; 
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shopPage/shopPage.component";
import signInAndSignOutPage from './pages/sign-In-Out/sign-In-Out.component'; 
import CheckOutPage from './pages/checkout-page/checkOut.component';



class App extends React.Component {

  unsubscribeFromAuth = null; 
  
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }


render () {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component = {HomePage}></Route>
      <Route path='/shop' component = {ShopPage}></Route> 
      <Route exact path = '/checkOut' component= {CheckOutPage}></Route>
      <Route exact path='/signIn' component = {signInAndSignOutPage} 
      
      render = {()=> this.props.currentUser ? ( 
        <Redirect to ='/'></Redirect> ) : 
        (<signInAndSignOutPage></signInAndSignOutPage>)
      }
      ></Route> 
    
    </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})
 
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
}) 
export default connect(mapStateToProps, mapDispatchToProps)(App);

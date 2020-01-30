import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom' 
import Header from './component/header/header.component'; 
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shopPage/shopPage.component";
import signInAndSignOutPage from './pages/sign-In-Out/sign-In-Out.component'; 
import {auth} from './firebase/firebase.utils'; 
import { render } from '@testing-library/react';

class App extends React.Component {

  constructor(){
    super (); 

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null; 
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user}); 
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }


render () {
  return (
    <div>
    <Header currentUser = {this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component = {HomePage}></Route>
    <Route exact path='/shop' component = {ShopPage}></Route> 
    <Route exact path='/signIn' component = {signInAndSignOutPage}></Route> 
    </Switch>
    </div>
  );
  }
}
export default App;

import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom' 
import Header from './component/header/header.component'; 
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shopPage/shopPage.component";
import signInAndSignOutPage from './pages/sign-In-Out/sign-In-Out.component'; 

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component = {HomePage}></Route>
    <Route exact path='/shop' component = {ShopPage}></Route> 
    <Route exact path='/signIn' component = {signInAndSignOutPage}></Route> 
    </Switch>
    </div>
  );
}

export default App;

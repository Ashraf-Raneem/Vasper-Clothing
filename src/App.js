import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom' 
import Header from './component/header/header.component'; 
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shopPage/shopPage.component"; 

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component = {HomePage}></Route>
    <Route exact path='/shop' component = {ShopPage}></Route> 
    </Switch>
    </div>
  );
}

export default App;

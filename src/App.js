import React from 'react';
import './App.css';
import {Route} from 'react-router-dom' 
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shopPage/shopPage.component"; 

function App() {
  return (
    <div>
    <Route exact path='/' component = {HomePage}></Route>
    <Route exact path='/shop' component = {ShopPage}></Route> 
    </div>
  );
}

export default App;

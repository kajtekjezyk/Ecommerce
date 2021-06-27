import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
        <Switch>
            <Route path= "/shop" component={ShopPage}/>
            <Route path = "/" exact component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;

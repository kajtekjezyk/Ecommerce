import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'

const HatsPage = props => {
    return (
        <div>
            <h1>HATS PAGE</h1>
        </div>
    )
}

function App() {
  return (
    <div>
        <Switch>
            <Route path= "/hats" component={HatsPage}/>
            <Route path = "/" exact component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;

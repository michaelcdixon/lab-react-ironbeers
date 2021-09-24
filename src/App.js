import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Beers from './Beers';
import BeerDetails from './BeerDetails';
import getRandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:id" component={BeerDetails} />
          <Route exact path="/randombeer" component={getRandomBeer} />
          <Route exact path="/newbeer" component={NewBeer} />
        </Switch>
      </div>
    </>
  );
}

export default App;

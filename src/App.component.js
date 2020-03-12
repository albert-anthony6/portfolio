import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.component';

import Home from './pages/home/Home.component';

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.component';

import Home from './pages/home/Home.component';
import ProjectOverview from './pages/project-overview/ProjectOverview.component';

import './App.styles.scss';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/project/:projectId" component={ProjectOverview}/>
      </Switch>
    </div>
  );
}

export default App;

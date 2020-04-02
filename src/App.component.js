import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.component';

import Home from './pages/home/Home.component';
import ProjectOverview from './pages/project-overview/ProjectOverview.component';

import './App.styles.scss';

const App = () => {
  const [home, setHome] = useState(true);

  const changeHome = boolean => {
    setHome(boolean);
  }

  return (
    <div className="app">
      <Header home={home}/>
      <Switch>
        <Route exact path="/" component={() => <Home changeHome={changeHome}/>}/>
        <Route exact path="/project/:projectId" component={() => <ProjectOverview changeHome={changeHome}/>}/>
      </Switch>
    </div>
  );
}

export default App;

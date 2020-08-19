import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import PortfolioNew from './components/Portfolio/PortfolioNew';
import PortfolioEdit from './components/Portfolio/PortfolioEdit';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
            <Route component={() => <PortfolioEdit />} exact path="/portfolio/:id" />
            <Route component={PortfolioNew} exact path="/portfolio/new" />
            <Route component={Dashboard} exact path="/dashboard" />
        </Switch>
      </div>
    </>
  );
}

export default App;

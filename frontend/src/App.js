import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HeaderNav from './components/Header/HeaderNav';
import DashboardHome from './components/Pages/DashboardHome/DashboardHome';
import PortfolioShow from './components/Pages/PortfolioShow/PortfolioShow';

const App = () => {
  const API = 'http://localhost:3000/users';
  const [portfolios, setPortfolios] = useState([]); // For All Portfolio Cards
  const [watchlists, setWatchlists] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((users) => {
        setPortfolios(users[0].portfolios);
        setWatchlists(users[0].watchlists);
      });
  }, []);

  return (
    <>
      <HeaderNav />
      <main className="container" id="main">
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/dashboard/portfolios/:id" component={PortfolioShow} />
          <Route
            path="/dashboard"
            component={() => (
              <DashboardHome portfolios={portfolios} watchlists={watchlists} />
            )}
          />
        </Switch>
      </main>
    </>
  );
};

export default App;

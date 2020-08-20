import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderNav from './components/Header/HeaderNav';
import DashboardHome from './components/DashboardHome/DashboardHome';
import PortfolioShow from './components/Portfolio/PortfolioShow';

const App = () => {
  const API = 'http://localhost:3000/users';
  const [portfolios, setPortfolios] = useState([]); // For All Portfolio Cards
  const [watchlists, setWatchlists] = useState([]);
  const [portfolio, setPortfolio] = useState({}); // For the Single View of that Portfolio

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((users) => {
        setPortfolios(users[0].portfolios);
        setWatchlists(users[0].watchlists);
      });
  }, []);

  const portfolioClick = (portfolio) => {
    setPortfolio(portfolio);
  };

  return (
    <>
      <HeaderNav />
      <main className="container" id="main">
        <Switch>
          <Route
            path="/dashboard/portfolios/:id"
            component={() => <PortfolioShow portfolio={portfolio} />}
          />
          <Route
            path="/dashboard"
            component={() => (
              <DashboardHome
                portfolios={portfolios}
                portfolioClick={portfolioClick}
                watchlists={watchlists}
              />
            )}
          />
        </Switch>
      </main>
    </>
  );
};

export default App;

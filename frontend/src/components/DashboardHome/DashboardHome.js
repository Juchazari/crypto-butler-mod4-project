import React from 'react';

import PortfolioContainer from '../Portfolio/PortfolioContainer';
import WatchlistContainer from '../Watchlist/WatchlistContainer';

const DashboardHome = (props) => {
  return (
    <div className="dashboard-home">
      <PortfolioContainer
        portfolios={props.portfolios}
        portfolioClick={props.portfolioClick}
      />
      <WatchlistContainer watchlists={props.watchlists} />
    </div>
  );
};

export default DashboardHome;

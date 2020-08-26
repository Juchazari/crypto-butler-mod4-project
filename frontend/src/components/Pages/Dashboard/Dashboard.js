import React, { useState } from 'react';
import './Dashboard.css';

import Portolios from './Sections/Portfolios/Portfolios';
import Watchlists from './Sections/Watchlists/Watchlists';
import NewWatchlistPopup from './Modals/NewWatchlistPopup';
import NewWatchCoinPopup from './Modals/NewWatchCoinPopup';

const Dashboard = (props) => {
  const [newWatchlistModal, setNewWatchlistModal] = useState(false);
  const [newWatchCoinModal, setNewWatchCoinModal] = useState(false);
  const [newCoinForWatchlist, setNewCoinForWatchlist] = useState(null);

  const createWatchCoin = (watchlist) => {
    setNewWatchCoinModal(true);
    setNewCoinForWatchlist(watchlist);
  };

  return (
    <div className="dashboard-home">
      <Portolios portfolios={props.portfolios} />
      <Watchlists
        watchlists={props.watchlists}
        createWatchList={() => setNewWatchlistModal(true)}
        createWatchCoin={createWatchCoin}
        removeWatchlistCoin={props.removeWatchlistCoin}
      />
      {newWatchlistModal ? (
        <NewWatchlistPopup
          createWatchlist={props.createWatchlist}
          hidePopup={() => setNewWatchlistModal(false)}
        />
      ) : null}
      {newWatchCoinModal ? (
        <NewWatchCoinPopup
          hidePopup={() => setNewWatchCoinModal(false)}
          addCoin={props.addCoin}
          watchlist={newCoinForWatchlist}
        />
      ) : null}
    </div>
  );
};

export default Dashboard;

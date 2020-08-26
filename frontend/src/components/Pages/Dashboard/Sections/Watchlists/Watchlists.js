import React, { useState } from 'react';
import './Watchlists.css';
import TabContainer from './TabContainer.js';

import WatchlistTable from './WatchlistTable.js';
import TableHead from '../../../../CustomTable/TableHead';
import TableBody from '../../../../CustomTable/TableBody';
import TableRow from '../../../../CustomTable/TableRow';
import TableCell from '../../../../CustomTable/TableCell';

const Watchlists = (props) => {
  const [activeWatchlist, setActiveWatchlist] = useState(props.watchlists[0]);

  const clickWatchlistTab = (watchlist) => {
    setActiveWatchlist(watchlist);
  };

  return (
    <div className="watchlists-container">
      <div className="watchlist-section-header">
        <h2>WATCHLISTS</h2>
      </div>
      <TabContainer
        watchlists={props.watchlists}
        clickWatchlistTab={clickWatchlistTab}
        createWatchList={props.createWatchList}
      />
      {activeWatchlist !== undefined ? (
        <WatchlistTable
          key={activeWatchlist.id}
          watchlist={activeWatchlist}
          createWatchCoin={props.createWatchCoin}
          removeWatchlistCoin={props.removeWatchlistCoin}
        />
      ) : null}
    </div>
  );
};

export default Watchlists;

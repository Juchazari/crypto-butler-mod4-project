import React, { useState, useEffect } from 'react';

import TableHead from '../../../../CustomTable/TableHead';
import TableBody from '../../../../CustomTable/TableBody';
import TableRow from '../../../../CustomTable/TableRow';
import TableCell from '../../../../CustomTable/TableCell';

const WatchlistTable = (props) => {
  const watchlist = props.watchlist;
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setCoins(watchlist.coins);
  }, []);

  const removeWatchlistCoin = (coin) => {
    const filteredCoins = coins.filter((c) => c.id !== coin.id);
    setCoins(filteredCoins);
  };

  return (
    <>
      <div className="watchlist-table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p className="thead-tr-th-first">ASSET NAME</p>
            </TableCell>
            <TableCell>
              <p>PRICE</p>
            </TableCell>
            <TableCell>
              <p>24H CHANGE</p>
            </TableCell>
            <TableCell>
              <p>24H VOLUME</p>
            </TableCell>
            <TableCell>
              <p>MARKET CAP</p>
            </TableCell>
            <TableCell>
              <p onClick={() => props.createWatchCoin(watchlist)}>
                <i className="fa fa-plus"></i>
              </p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={'crypto-butler-tbody'}>
          {coins.map((coin, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>
                  <div className="table-coin-image-box">
                    <img src={coin.url_logo} alt={coin.name} />
                  </div>
                  <p>{coin.symbol}</p>
                </TableCell>
                <TableCell>
                  <p>$2.00</p>
                </TableCell>
                <TableCell>
                  <p>+ 2.3%</p>
                </TableCell>
                <TableCell>
                  <p>$117M</p>
                </TableCell>
                <TableCell>
                  <p>$3.36B</p>
                </TableCell>
                <TableCell>
                  <p onClick={() => removeWatchlistCoin(coin)}>
                    {/* onClick={() => props.removeWatchlistCoin(watchlist, coin)} */}
                    <i className="fa fa-trash"></i>
                  </p>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </div>
    </>
  );
};

export default WatchlistTable;

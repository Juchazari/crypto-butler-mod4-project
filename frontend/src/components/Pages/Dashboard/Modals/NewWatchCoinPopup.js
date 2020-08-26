import React, { useState, useEffect } from 'react';
import SearchResults from '../../Portfolio/Modals/SearchResults';
import './modal.css';

const NewWatchCoinPopup = (props) => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/coins')
      .then((res) => res.json())
      .then((coins) => setCoins(coins));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const dynamicSearch = () => {
    const filteredCoins = coins.filter(
      (c) =>
        c.name.toLowerCase().startsWith(searchTerm) ||
        c.symbol.toLowerCase().startsWith(searchTerm)
    );

    if (filteredCoins.length > 0) {
      return filteredCoins;
    } else {
      return [];
    }
  };

  const clickCoin = (coin) => {
    setCoin(coin);
    setSearchTerm('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addCoin(coin, props.watchlist);
    props.hidePopup();
  };

  return (
    <div className="new-transaction-popup">
      <div className="new-watchlist-coin-modal">
        <input
          type="text"
          placeholder="Ex. BTC, Bitcoin, LTC, Litecoin"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        />
        {searchTerm !== '' ? (
          <SearchResults clickCoin={clickCoin} results={dynamicSearch()} />
        ) : null}
        {coin ? (
          <div className="chosen-coin">
            <form onSubmit={(e) => handleSubmit(e)}>
              <img src={coin.url_logo} alt={coin.name}></img>
              <p>{coin.name}</p>
              <input type="submit" value="Add" />
            </form>
          </div>
        ) : null}
        <div className="new-watchlist-coin-cancel-btn">
          <button onClick={props.hidePopup}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NewWatchCoinPopup;

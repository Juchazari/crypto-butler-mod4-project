import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

const NewTransactionPopup = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const [bought_price, setBoughtPrice] = useState('');
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/coins')
      .then((res) => res.json())
      .then((coins) => setCoins(coins));
  });

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

    setQuantity('');
    setBoughtPrice('');
    const transaction = {
      coin: coin.id,
      bought_price,
      quantity,
    };
    props.newTransaction(transaction);
  };

  return (
    <div className="new-transaction-popup">
      <div className="cb-modal">
        <input
          type="text"
          placeholder="Search coins by name..."
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        />
        {searchTerm !== '' ? (
          <SearchResults clickCoin={clickCoin} results={dynamicSearch()} />
        ) : null}
        {coin ? (
          <div className="chosen-coin">
            <img src={coin.url_logo} alt={coin.name}></img>
            <p>{coin.name}</p>
          </div>
        ) : null}
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Quantity</label>
          <br />
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <br />
          <label>Price Per Coin</label>
          <br />
          <input
            type="number"
            name="bought_price"
            value={bought_price}
            onChange={(e) => setBoughtPrice(e.target.value)}
          />
          <br />
          <input type="submit" value="Add Coin" />
        </form>
      </div>
    </div>
  );
};

export default NewTransactionPopup;

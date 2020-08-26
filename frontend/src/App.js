import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HeaderNav from './components/Header/HeaderNav';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Portfolio from './components/Pages/Portfolio/Portfolio';

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

  const deletePortfolio = (portfolio) => {
    const filterPortfolios = portfolios.filter(
      (port) => port.id !== portfolio.id
    );

    setPortfolios(filterPortfolios);

    fetch(`http://localhost:3000/portfolios/${portfolio.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  };

  const createWatchlist = (name) => {
    console.log(name);
    fetch('http://localhost:3000/watchlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((watchlist) => {
        const updatedWatchlists = [...watchlists, watchlist];
        setWatchlists(updatedWatchlists);
      });
  };

  const addCoin = (coin, watchlist) => {
    fetch('http://localhost:3000/watchlist_coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        watchlist_id: watchlist.id,
        coin_id: coin.id,
      }),
    })
      .then((res) => res.json())
      .then((coin) => {
        const copyWatchlists = [...watchlists];
        copyWatchlists.forEach((w) => {
          if (w.id === watchlist.id) {
            w.coins.length = 0;
            w.coins.push.apply(w.coins, watchlist.coins);
          }
        });
        // const updatedWatchlist = watchlists.filter(
        //   (w) => w.id !== watchlist.id
        // );
        setWatchlists([...copyWatchlists]);
      });
  };

  const removeWatchlistCoin = (watchlist, coin) => {
    // fetch("http://localhost:3000/watchlistcoins")
    console.log(watchlist, coin);
  };

  return (
    <>
      <HeaderNav />
      <main className="container" id="main">
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route
            path="/dashboard/portfolios/:id"
            component={() => <Portfolio deletePortfolio={deletePortfolio} />}
          />
          <Route
            path="/dashboard"
            component={() => (
              <Dashboard
                portfolios={portfolios}
                watchlists={watchlists}
                createWatchlist={createWatchlist}
                addCoin={addCoin}
                removeWatchlistCoin={removeWatchlistCoin}
              />
            )}
          />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;

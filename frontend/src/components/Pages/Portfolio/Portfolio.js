import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import './Portfolio.css';
import Header from './Sections/Header/Header';
import PortfolioTable from './Sections/PortfolioTable/PortfolioTable';
import TransactionsTable from './Sections/TransactionsTable/TransactionsTable';
import DeletePortfolioModal from './Modals/DeletePortfolioModal';

const Portfolio = (props) => {
  const params = useParams();

  const [deleteModal, setDeleteModal] = useState(false);
  const [portfolio, setPortfolio] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const PORTFOLIO_URL = `http://localhost:3000/portfolios/${params.id}`;

    fetch(PORTFOLIO_URL)
      .then((res) => res.json())
      .then((portfolio) => {
        setPortfolio(portfolio);
        setTransactions(portfolio.transactions);
        distinctCoins(portfolio.transactions);
      });
  }, []);

  const distinctCoins = (transactions) => {
    let cArray = [];

    transactions.forEach((transaction) => {
      cArray.push(transaction.coin);
    });

    const uniqCoins = Array.from(new Set(cArray.map((c) => c.id))).map((id) => {
      return {
        id: id,
        name: cArray.find((c) => c.id === id).name,
        symbol: cArray.find((c) => c.id === id).symbol,
        url_logo: cArray.find((c) => c.id === id).url_logo,
        created_at: cArray.find((c) => c.id === id).created_at,
        updated_at: cArray.find((c) => c.id === id).updated_at,
      };
    });

    setCoins(uniqCoins);
  };

  const updateTransaction = (transaction) => {
    let updatedTransaction;
    const updatedTransactions = transactions.map((t) => {
      const newT = { ...t };
      if (newT.id === transaction.id) {
        newT.quantity = transaction.quantity;
        newT.bought_price = transaction.bought_price;
        updatedTransaction = newT;
      }
      return newT;
    });
    setTransactions(updatedTransactions);
    patchTransaction(updatedTransaction);
  };

  const patchTransaction = (transaction) => {
    const { quantity, bought_price } = transaction;

    fetch(`http://localhost:3000/transactions/${transaction.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ quantity, bought_price }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const deleteTransaction = (transaction) => {
    const updatedTransactions = transactions.filter(
      (t) => t.id !== transaction.id
    );
    setTransactions(updatedTransactions);

    fetch(`http://localhost:3000/transactions/${transaction.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  };

  const newTransaction = (transaction) => {
    transaction.portfolio = portfolio.id;
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then((res) => res.json())
      .then((transaction) => {
        const updatedTransactions = [...transactions, transaction];
        setTransactions(updatedTransactions);
        distinctCoins(updatedTransactions);
      });
  };

  const deletePortfolio = () => {
    setDeleteModal(false);
    props.deletePortfolio(portfolio);
  };

  return (
    <>
      <div className="portfolio-show">
        <Header portfolio={portfolio} />
        <div className="portfolio-name-main">
          <div className="portfolio-name-tab">
            <h2>{portfolio.name}</h2>
          </div>
        </div>
        <PortfolioTable coins={coins} transactions={transactions} />
        <TransactionsTable
          transactions={transactions}
          updateTransaction={updateTransaction}
          deleteTransaction={deleteTransaction}
          newTransaction={newTransaction}
        />
        <div className="portfolio-danger-zone">
          <button onClick={() => setDeleteModal(true)}>
            <i className="fa fa-trash"></i>DELETE PORTFOLIO
          </button>
        </div>
      </div>
      {deleteModal ? (
        <DeletePortfolioModal
          deletePortfolioClick={deletePortfolio}
          cancelDeleteModal={() => setDeleteModal(false)}
        />
      ) : null}
    </>
  );
};

export default Portfolio;

import React, { useState } from 'react';

import TableHead from '../../../../CustomTable/TableHead';
import TableBody from '../../../../CustomTable/TableBody';
import TableRow from '../../../../CustomTable/TableRow';
import TableCell from '../../../../CustomTable/TableCell';
import EditTransactionPopup from '../../Modals/EditTransactionModal';
import NewTransactionPopup from '../../Modals/NewTransactionModal';

const TransactionsTable = (props) => {
  const transactions = props.transactions;
  const [transaction, setTransaction] = useState({});
  const [popup, setPopup] = useState(false);
  const [newtPopup, setNewtPopup] = useState(false);

  const formatDate = (date) => {
    return date.split('T')[0];
  };

  const showEditPopup = (transaction) => {
    setPopup(!popup);
    setTransaction(transaction);
  };

  return (
    <div className="portfolio-tables">
      <div className="cb-section-header">
        <h2>Transactions</h2>
      </div>
      <TableHead>
        <TableRow>
          <TableCell>
            <p className="thead-tr-th-first">ASSET</p>
          </TableCell>
          <TableCell>
            <p>PRICE PER COIN</p>
          </TableCell>
          <TableCell>
            <p>Quantity</p>
          </TableCell>
          <TableCell>
            <p>Date</p>
          </TableCell>
          <TableCell>
            <p className="add-transaction" onClick={() => setNewtPopup(true)}>
              <i className="fa fa-plus"></i>
            </p>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={'crypto-butler-tbody-light'}>
        {transactions.map((transaction) => {
          return (
            <TableRow key={transaction.id}>
              <TableCell>
                <div className="table-coin-image-box">
                  <img
                    src={transaction.coin.url_logo}
                    alt={transaction.coin.name}
                  />
                </div>
                <p>{transaction.coin.symbol}</p>
              </TableCell>
              <TableCell>
                <p>${transaction.bought_price}</p>
              </TableCell>
              <TableCell>
                <p>{transaction.quantity}</p>
              </TableCell>
              <TableCell>
                <p>{formatDate(transaction.created_at)}</p>
              </TableCell>
              <TableCell>
                <p onClick={() => showEditPopup(transaction)}>
                  <i className="fa fa-edit"></i>
                </p>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      {popup ? (
        <EditTransactionPopup
          transaction={transaction}
          updateTransaction={props.updateTransaction}
          hidePopup={() => setPopup(false)}
          deleteTransaction={props.deleteTransaction}
        />
      ) : null}
      {newtPopup ? (
        <NewTransactionPopup
          newTransaction={props.newTransaction}
          hidePopup={() => setNewtPopup(false)}
        />
      ) : null}
    </div>
  );
};

export default TransactionsTable;

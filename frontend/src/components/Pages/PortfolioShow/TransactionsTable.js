import React, { useState } from 'react';

import TableHead from '../../CustomTable/TableHead';
import TableBody from '../../CustomTable/TableBody';
import TableRow from '../../CustomTable/TableRow';
import TableCell from '../../CustomTable/TableCell';
import EditTransactionPopup from './EditTransactionPopup';
import NewTransactionPopup from './NewTransactionPopup';

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
    <div className="coins-table">
      <TableHead>
        <TableRow>
          <div className="add-transaction" onClick={() => setNewtPopup(true)}>
            <i className="fa fa-plus"></i>
          </div>
          <TableCell>
            <p>ASSET</p>
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
            <p>Edit</p>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((transaction) => {
          return (
            <TableRow key={transaction.id}>
              <TableCell>
                <img
                  src={transaction.coin.url_logo}
                  alt={transaction.coin.name}
                />
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
        <NewTransactionPopup newTransaction={props.newTransaction} />
      ) : null}
    </div>
  );
};

export default TransactionsTable;

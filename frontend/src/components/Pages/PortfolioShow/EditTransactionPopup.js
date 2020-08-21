import React, { useState } from 'react';

const EditTransactionPopup = (props) => {
  const transaction = props.transaction;

  const [quantity, setQuantity] = useState(transaction.quantity);
  const [boughtPrice, setBoughtPrice] = useState(transaction.bought_price);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      ...transaction,
      quantity: parseInt(quantity),
      bought_price: parseInt(boughtPrice),
    };
    props.updateTransaction(updatedTransaction);
    props.hidePopup();
  };

  return (
    <div className="edit-transaction-popup">
      <div className="cb-modal">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Price Per Coin</label>
          <input
            type="number"
            name="bought_price"
            value={boughtPrice}
            onChange={(e) => setBoughtPrice(e.target.value)}
          />
          <br />
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input type="submit" value="Save" />
        </form>
        <button onClick={() => props.deleteTransaction(transaction)}>
          Delete
        </button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default EditTransactionPopup;

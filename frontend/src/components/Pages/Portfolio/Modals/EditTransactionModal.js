import React, { useState } from 'react';

const EditTransactionModal = (props) => {
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

  const handleDeleteClick = () => {
    props.deleteTransaction(transaction);
    props.hidePopup();
  };

  const handleCancelClick = () => {
    props.hidePopup();
  };

  return (
    <div className="cb-modal-bg">
      <div className="cb-modal">
        <div className="cb-modal-img-container">
          <img src={transaction.coin.url_logo} alt={transaction.coin.symbol} />
        </div>
        <form
          className="cb-modal-form-container"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="cb-form-control cb-fc-mb">
            <label>Price Per Coin</label>
            <input
              type="number"
              name="bought_price"
              value={boughtPrice}
              onChange={(e) => setBoughtPrice(e.target.value)}
            />
          </div>
          <div className="cb-form-control">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="cb-form-control">
            <input type="submit" value="Update" />
          </div>
        </form>
        <div className="cb-modal-btns-container">
          <button
            className="transaction-delete-btn"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
          <button className="cancel-modal-btn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTransactionModal;

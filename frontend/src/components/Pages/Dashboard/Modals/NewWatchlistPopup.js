import React, { useState } from 'react';
import './modal.css';

const NewWatchlistPopup = (props) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.createWatchlist(name);
    props.hidePopup();
  };

  return (
    <div className="new-watchlist-popup">
      <div className="new-watchlist-modal">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="new-watchlist-modal-form-control">
            <label>Watchlist Name</label>
            <input
              className="watchlist-search-input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="new-watchlist-modal-btns">
            <input
              type="submit"
              value="Create"
              className="new-watchlist-modal-btn"
            />
            <button
              className="new-watchlist-modal-btn"
              onClick={() => props.hidePopup()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewWatchlistPopup;

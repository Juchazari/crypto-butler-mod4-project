import React from 'react';
import { NavLink } from 'react-router-dom';

const DeletePortfolioModal = (props) => {
  return (
    <div className="delete-portfolio-modal-bg">
      <div className="delete-portfolio-modal">
        <p>PERMANENTLY DELETE PORTFOLIO?</p>
        <div className="dp-modal-btn-container">
          <button onClick={props.deletePortfolioClick}>
            <NavLink to="/dashboard">Continue</NavLink>
          </button>
          <button onClick={props.cancelDeleteModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePortfolioModal;

import React from 'react';
import './Portfolio.css';

import PortfolioCard from './PortfolioCard';

const PortfolioContainer = (props) => {
  return (
    <div className="portfolio-container">
      <div className="portfolios-header">
        <h2>PORTFOLIOS</h2>
      </div>
      <div className="row portfolios-all">
        {props.portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            portfolio={portfolio}
            portfolioClick={props.portfolioClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioContainer;

import React from 'react';
import './Portfolios.css';

import PortfolioCard from './PortfolioCard';

const Portfolios = (props) => {
  return (
    <div className="portfolio-container">
      <div className="portfolios-header">
        <h2>PORTFOLIOS</h2>
      </div>
      <div className="row portfolios-all">
        {props.portfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
};

export default Portfolios;

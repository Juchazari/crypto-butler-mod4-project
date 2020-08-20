import React from 'react';

const PortfolioShow = (props) => {
  const initialInvestment = () => {
    let investment = 0;

    if (props.portfolio.transactions) {
      const transactions = props.portfolio.transactions;

      transactions.forEach((transaction) => {
        investment += transaction.bought_price * transaction.quantity;
      });
    }

    return investment;
  };

  const portfolioAge = () => {
    let message = '';

    if (props.portfolio.created_at) {
      const date = props.portfolio.created_at.split('T')[0];
      const createdDate = new Date(date);
      const currentDate = new Date();

      const difference = Math.floor(
        currentDate.getTime() - createdDate.getTime()
      );
      const day = 1000 * 60 * 60 * 24;

      const days = Math.floor(difference / day);
      const months = Math.floor(days / 31);
      const years = Math.floor(months / 12);

      message = `${years} Year, ${months} Month, ${days} Days`;
    }

    return message;
  };

  return (
    <div className="portfolio-show">
      <div className="ps-header">
        <div className="ps-header-tr">
          <div className="ps-header-th">
            <p>INITIAL INVESTMENT</p>
            <span>${initialInvestment()}</span>
          </div>
          <div className="ps-header-th">
            <p>PORTFOLIO AGE</p>
            <span>{portfolioAge()}</span>
          </div>
          <div className="ps-header-th">
            <p>CURRENT WORTH</p>
            <span>$12,250.82</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShow;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';

const PortfolioCard = (props) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const chart = () => {
    const transactions = props.portfolio.transactions;

    let labels = [];
    let data = [];
    let backgroundColor = [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)',
    ];

    transactions.forEach((transaction) => {
      labels.push(transaction.coin.symbol);
      data.push(transaction.bought_price * transaction.quantity);
    });

    setChartData({
      labels,
      datasets: [{ data, backgroundColor, borderWidth: 1 }],
    });

    setChartOptions({ legend: { display: false } });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <div className="col-md-4">
        <Link to={`/dashboard/portfolios/${props.portfolio.id}`}>
          <div
            className="portfolio-card"
            onClick={() => props.portfolioClick(props.portfolio)}
          >
            <div className="portfolio-card-header">
              <h3>{props.portfolio.name}</h3>
            </div>
            <div>
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PortfolioCard;

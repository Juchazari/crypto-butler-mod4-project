import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class PortfolioCard extends Component {
    state = {
        chartData: {
            labels: ["BTC", "LTC", "ETH"],
            datasets: [
                {
                    data: [5000, 2500, 1000]
                }
            ]
        }
    }

    componentDidMount() {
        const transactions = this.props.portfolio.transactions

        let labels = [];
        let data = [];

        transactions.forEach(transaction => {
            labels.push(transaction.coin.symbol)
            data.push(transaction.bought_price * transaction.quantity)
        })

        this.setState({
            chartData: {
                labels,
                datasets: [
                    {
                        data
                    }
                ]
            }
        })
    }

    render() { 
        const portfolio = this.props.portfolio;
        return (
            <div className="col-md-4">
                <div className="portfolio-card">
                    <div className="portfolio-card-header">
                        <h3>{portfolio.name}</h3>
                        <div>
                            <Doughnut 
                                data={this.state.chartData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PortfolioCard;
import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class PortfolioCard extends Component {
    state = {
        chartData: {
            labels: [],
            datasets: [{ data: [] }],
            backgroundColor: [],
            borderWidth: 0
        },
        chartOptions: {
            legend: {
                display: false
            }
        }
    }

    componentDidMount() {
        const transactions = this.props.portfolio.transactions

        let labels = [];
        let data = [];
        let backgroundColor = [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)'
        ]

        transactions.forEach(transaction => {
            labels.push(transaction.coin.symbol)
            data.push(transaction.bought_price * transaction.quantity)
        })

        this.setState({
            chartData: {
                labels,
                datasets: [{ data, backgroundColor, borderWidth: 1 }],
            }
        })
    }

    render() { 
        const portfolio = this.props.portfolio;
        return (
            <div className="col-md-4" onClick={() => this.props.showPortfolioEdit(portfolio)} >
                <div className="portfolio-card">
                    <div className="portfolio-card-header">
                        <h3>{portfolio.name}</h3>
                    </div>
                    <div>
                        <Doughnut 
                            data={this.state.chartData}
                            options={this.state.chartOptions}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PortfolioCard;
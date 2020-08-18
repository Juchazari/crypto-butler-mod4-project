import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import PortfolioContainer from '../Portfolio/PortfolioContainer';

const USER_PORTFOLIOS = "http://localhost:3000/users/1/portfolios";

class  Dashboard extends Component {

    state = {
        portfolios: [],
    }
    
    componentDidMount() {
        fetch(USER_PORTFOLIOS)
            .then(res => res.json())
            .then(portfolios => this.setState({ portfolios }))
    }

    render() { 
        return (
            <div className="dashboard">
                <Header />
                <main>
                    <PortfolioContainer portfolios={this.state.portfolios} />
                </main>
            </div>
        );
    }
}
 
export default Dashboard;
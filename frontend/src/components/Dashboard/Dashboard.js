import React, { Component } from 'react';
import './Dashboard.css';

import PortfolioContainer from '../Portfolio/PortfolioContainer';
import WatchlistContainer from '../Watchlist/WatchlistContainer';

const API = "http://localhost:3000/users";

class  Dashboard extends Component {

    state = {
        portfolios: [],
        watchlists: []
    }
    
    componentDidMount() {
        fetch(API)
            .then(res => res.json())
            .then(users => {
                const portfolios = users[0].portfolios;
                const watchlists = users[0].watchlists;
                this.setState({ portfolios, watchlists })
            })
    }

    render() { 
        return (
            <>
                <main className="dashboard">
                    <PortfolioContainer portfolios={this.state.portfolios} />
                    <WatchlistContainer watchlists={this.state.watchlists} />
                </main>
            </>
        );
    }
}
 
export default Dashboard;
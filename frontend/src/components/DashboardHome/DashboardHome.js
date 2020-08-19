import React, { Component } from 'react';

import PortfolioContainer from '../Portfolio/PortfolioContainer';
import WatchlistContainer from '../Watchlist/WatchlistContainer';

class DashboardHome extends Component {
    render() {
        return (
            <>
                <PortfolioContainer
                    portfolios={this.props.portfolios}
                    showPortfolioEdit={this.props.showPortfolioEdit}
                />
                <WatchlistContainer watchlists={this.props.watchlists} />
            </>
        )
    }
}

export default DashboardHome;
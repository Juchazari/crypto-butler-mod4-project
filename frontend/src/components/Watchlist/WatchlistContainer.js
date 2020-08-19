import React, { Component } from 'react';
import WatchlistCard from './WatchlistCard.js';
import './Watchlist.css';

class WatchlistContainer extends Component {
    render() { 
        return (
            <div className="watchlist-container">
                <div className="row">
                    {
                        this.props.watchlists.map(watchlist => (
                            <WatchlistCard key={watchlist.id} watchlist={watchlist} />
                        ))
                    }
                </div>
            </div>
        );
    }
}
 
export default WatchlistContainer;
import React, { Component } from 'react';
import Coin from './Coin';

class WatchlistCard extends Component {
    render() { 
        const watchlist = this.props.watchlist
        return (
            <div className="col-md-12">
                <div className="watchlist-card">
                    <div className="wc-tab-name"><h3>{watchlist.name}</h3></div>
                    <div className="wc-table">
                        <div className="wc-thead">
                            <div className="wc-tr">
                                <div className="wc-th"><p>ASSET NAME</p></div>
                                <div className="wc-th"><p>PRICE</p></div>
                                <div className="wc-th"><p>24H CHANGE</p></div>
                                <div className="wc-th"><p>24H VOLUME</p></div>
                                <div className="wc-th"><p>MARKET CAP</p></div>
                            </div>
                        </div>
                        <div className="wc-tbody">
                            {
                                watchlist.coins.map(coin => (
                                    <Coin key={coin.id} coin={coin} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default WatchlistCard;
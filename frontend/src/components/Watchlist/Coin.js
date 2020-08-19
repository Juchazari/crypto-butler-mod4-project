import React, { Component } from 'react';

class Coin extends Component {
    render() { 
        const coin = this.props.coin
        return (
            <div className="wc-tr coin-row">
                <div className="wc-th jc-start">
                    <img src={coin.url_logo} alt={coin.name} />
                    <p>{coin.symbol}</p>
                </div>
                <div className="wc-th"><p>$2.00</p></div>
                <div className="wc-th"><p>+ 2.3%</p></div>
                <div className="wc-th"><p>$117M</p></div>
                <div className="wc-th"><p>$3.36B</p></div>
            </div>
        );
    }
}
 
export default Coin;
import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';

class  PortfolioContainer extends Component {
    render() { 
        return (
            <div className="container portfolio-container">
                <h2 className="portfolios-header">PORTFOLIOS</h2>
                <div className="row">
                    {
                        this.props.portfolios.map(portfolio => (
                            <PortfolioCard key={portfolio.id} portfolio={portfolio} />  
                        ))
                    }
                </div>
            </div>
        );
    }
}
 
export default PortfolioContainer;
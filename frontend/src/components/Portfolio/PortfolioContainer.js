import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Portfolio.css';

import PortfolioCard from './PortfolioCard';

class  PortfolioContainer extends Component {
    render() { 
        return (
            <div className="portfolio-container">
                <div className="portfolios-header">
                    <h2>PORTFOLIOS <Link to="/portfolios">+</Link></h2>
                </div>
                <div className="row portfolios-all">
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
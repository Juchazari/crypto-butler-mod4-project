import React, { Component } from 'react';
import './Main.css';

import DashboardHome from '../DashboardHome/DashboardHome';
import PortfolioEdit from '../Portfolio/PortfolioEdit';
import PortfolioNew from '../Portfolio/PortfolioNew';

const API = "http://localhost:3000/users";

class  Dashboard extends Component {

    state = {
        portfolios: [],
        watchlists: [],
        dashboardHome: true,
        portfolioEdit: false,
        portfolioNew: false
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

    renderCheck = () => {
        if (this.state.dashboardHome) {
            return <DashboardHome showPortfolioEdit={this.showPortfolioEdit} portfolios={this.state.portfolios} watchlists={this.state.watchlists} />
        } else if (this.state.portfolioEdit) {
            return <PortfolioEdit />
        } else if (this.state.portfolioNew) {
            return <PortfolioNew />
        }
    }

    showPortfolioEdit = (portfolio) => {
        this.setState(prevState => {
            return {
                dashboardHome: !prevState.dashboardHome,
                portfolioEdit: !prevState.portfolioEdit
            }
        })
    }

    render() { 
        const dashboardHome = this.state.dashboardHome;
        return (
            <main className="main container">
                { this.renderCheck() }
            </main>
        );
    }
}
 
export default Dashboard;
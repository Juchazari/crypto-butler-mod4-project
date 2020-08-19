import React, { Component } from 'react';

const PORTFOLIO_URL = "http://localhost:3000/portfolios"

class PortfolioEdit extends Component {

    // state = {
    //     portfolio: {}
    // }

    // componentDidMount() {
    //     const portfolioId = this.props.match.params.id;
    //     fetch(`${PORTFOLIO_URL}/${portfolioId}`)
    //         .then(res => res.json())
    //         .then(portfolio => this.setState({ portfolio }))
    // }

    render() { 
        return (
            <>
                <h1>Hello Portfolio Edit</h1>
                {/* <form>
                    <input
                        type="text"
                        name="name"
                        value={this.state.portfolio.name}
                    />
                    <input type="submit" value="Update" />
                </form> */}
            </>
        );
    }
}
 
export default PortfolioEdit;
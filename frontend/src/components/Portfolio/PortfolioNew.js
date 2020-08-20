import React, { Component } from 'react';
import SearchResults from './SearchResults'

class PortfolioNew extends Component {

    state = {
        name: "",
        coins: [],
        searchTerm: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/coins')
        .then(res => res.json())
        .then(res => this.setState({
            coins: res
        }))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleSelectChange = (e) => {
    //     this.setState({
    //         coins: [e.target.value]
    //     })
    // }

    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        })
    }

    dynamicSearch = () => {
        if (this.state.searchTerm !== "") {
            return this.state.coins.filter(c => c.name.toLowerCase().includes(this.state.searchTerm) || c.symbol.toLowerCase().includes(this.state.searchTerm))
        } else {
            return null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/transactions', {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(this.props.history.push('/dashboard'))
    }

    render() { 
        return (
            <div className="portfolio-new-page">
                <h1>New Portfolio</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name.value}
                        placeholder="Portfolio Name..."
                        onChange={this.handleChange}
                    /><br />
                    <input 
                        type="text"
                        placeholder="Search coins by name..."
                        onChange={(e) => this.handleSearch(e)}
                    />
                    {this.state.searchTerm !== "" ? 
                    <SearchResults results={this.dynamicSearch()} />
                    :
                    null
                    }
                    <br />
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}
 
export default PortfolioNew;
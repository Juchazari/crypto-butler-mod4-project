import React, { Component } from 'react';


class PortfolioNew extends Component {

    state = {
        name: "",
        coins: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelectChange = (e) => {
        this.setState({
            coins: [e.target.value]
        })
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
        })
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
                    />
                    <select onChange={this.handleSelectChange}>
                        <option defaultValue>Please select a coin</option>
                        <option value="39">DigiByte</option>
                        <option value="40">Dogecoin</option>
                        <option value="58">Qtum</option>
                        <option value="81">Bitcoin Gold</option>
                    </select>
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}
 
export default PortfolioNew;
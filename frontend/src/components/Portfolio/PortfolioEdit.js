import React, { Component } from 'react';
import { useParams } from "react-router";

const PORTFOLIO_URL = "http://localhost:3000/portfolios"

const PortfolioEdit = (props) => {

    let params = useParams();
    console.log(params)

    return (
        <div className="portfolio-edit-page">
            <h1>Hello World</h1>
            <form>
                <input
                    type="text"
                    name="name"
                />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
}
 
export default PortfolioEdit;
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

const PORTFOLIO_URL = "http://localhost:3000/portfolios"

const PortfolioEdit = (props) => {

    const [portfolio, setPortfolio] = useState(0);
    const [promise, isResolved] = useState(false);
    const [key, setKey] = useState(0)

    let params = useParams();
    console.log(params)

    const fetchPortfolio = async () => {
        const apiCall = await fetch(PORTFOLIO_URL + `/${params.id}`)
        const currentPortfolio = await apiCall.json();
        setPortfolio(currentPortfolio);
        setKey(params.id);
        isResolved(true);
    }

    useEffect(() => {
        fetchPortfolio()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.bought_price);
        console.log(portfolio)
        fetch(PORTFOLIO_URL + `/${params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name: e.target.name.value
            }) 
                
          
            
        })
    }

    return (
            <div className="portfolio-edit-page">
                {console.log(portfolio)}
                <h1>{portfolio.name}</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={portfolio.name || ''}
                    />
                    <br></br>

                    {promise ?
                        portfolio.transactions.map(t => {

                            return [
                                <strong>{t.coin.symbol}</strong>,
                                <br />,
                                <label>Bought Price</label>,
                                <input
                                    type="text"
                                    name="bought_price"
                                    defaultValue={t.bought_price}
                                />,
                                <br />,
                                <label>Quantity</label>,
                                <input
                                    type="text"
                                    defaultValue={t.quantity} />,
                                <br />
                            ]
                        })
                        :
                        null
                    }
                    <br />
                    <input type="submit" value="Update" />
                </form>
            </div>
        );
    }

    export default PortfolioEdit;
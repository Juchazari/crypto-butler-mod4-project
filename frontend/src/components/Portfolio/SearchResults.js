import React, { useState } from 'react';

const SearchResults = (props) => {
    const [clicked, handleClick] = useState(false)

    return (
        <table className="search">
            <tbody>
                <tr>
                    <th>
                        <h4>
                            Symbol
                        </h4>
                    </th>
                    <th>
                        <h4>
                            Name
                        </h4>
                    </th>
                </tr>
                {props.results.map(coin => {
                    return <tr>
                        <td>{coin.symbol}</td>
                        <td>{coin.name}</td>
                        {/* {clicked ?
                            <div className="inputs">
                                <td>
                                    <label for="priceBought">Price Bought:</label>
                                    <input
                                        type="number"
                                        name="priceBought"
                                    />
                                </td>
                                <td>
                                    <label for="quantity">Quantity:</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                    />
                                </td>
                            </div>
                            :
                            null
                        } */}
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default SearchResults
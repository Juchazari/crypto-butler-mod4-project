import React, { useState } from 'react';

const SearchResults = (props) => {
  return (
    <table className="search">
      <tbody>
        <tr>
          <th>
            <h4>Symbol</h4>
          </th>
          <th>
            <h4>Name</h4>
          </th>
        </tr>
        {props.results.map((coin) => {
          return (
            <tr onClick={() => props.clickCoin(coin)}>
              <td>{coin.symbol}</td>
              <td>{coin.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;

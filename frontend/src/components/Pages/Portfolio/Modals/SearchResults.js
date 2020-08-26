import React from 'react';
import './search.css';

import TableHead from '../../../CustomTable/TableHead';
import TableBody from '../../../CustomTable/TableBody';
import TableRow from '../../../CustomTable/TableRow';
import TableCell from '../../../CustomTable/TableCell';

const SearchResults = (props) => {
  return (
    <div className="search-table">
      <TableHead>
        <TableRow>
          <TableCell>
            <h4>Symbol</h4>
          </TableCell>
          <TableCell>
            <h4>Name</h4>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.results.map((coin) => {
          return (
            <TableRow onClick={() => props.clickCoin(coin)}>
              <p onClick={() => props.clickCoin(coin)}>{coin.symbol}</p>
              <p onClick={() => props.clickCoin(coin)}>{coin.name}</p>
            </TableRow>
          );
        })}
      </TableBody>
    </div>
  );
};

export default SearchResults;

import React from 'react';

import TableHead from '../../../../CustomTable/TableHead';
import TableBody from '../../../../CustomTable/TableBody';
import TableRow from '../../../../CustomTable/TableRow';
import TableCell from '../../../../CustomTable/TableCell';
import Portfolio from '../../Portfolio';

const PortfolioTable = (props) => {
  return (
    <div className="coins-table">
      <TableHead>
        <TableRow>
          <TableCell>
            <p className="thead-tr-th-first">ASSET</p>
          </TableCell>
          <TableCell>
            <p>PRICE PER COIN (AVG)</p>
          </TableCell>
          <TableCell>
            <p>TOTAL SPENT</p>
          </TableCell>
          <TableCell>
            <p>QUANTITY</p>
          </TableCell>
          <TableCell>
            <p>TODAYS WORTH</p>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={'crypto-butler-tbody'}>
        {props.coins.map((coin, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell>
                <div className="table-coin-image-box">
                  <img src={coin.url_logo} alt={coin.name} />
                </div>
                <p>{coin.symbol}</p>
              </TableCell>
              <TableCell>
                <p>$1000</p>
              </TableCell>
              <TableCell>
                <p>$1000</p>
              </TableCell>
              <TableCell>
                <p>10</p>
              </TableCell>
              <TableCell>
                <p>$6000.05</p>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </div>
  );
};

export default PortfolioTable;

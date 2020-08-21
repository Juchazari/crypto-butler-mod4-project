import React from 'react';
import './Table.css';

const TableRow = (props) => {
  return <div className="crypto-butler-tr">{props.children}</div>;
};

export default TableRow;

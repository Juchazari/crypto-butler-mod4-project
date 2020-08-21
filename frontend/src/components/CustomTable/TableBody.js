import React from 'react';
import './Table.css';

const TableBody = (props) => {
  return <div className="crypto-butler-tbody">{props.children}</div>;
};

export default TableBody;

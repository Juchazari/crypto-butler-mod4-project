import React from 'react';
import './Table.css';

const TableHead = (props) => {
  return <div className="crypto-butler-thead">{props.children}</div>;
};

export default TableHead;

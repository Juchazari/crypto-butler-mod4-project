import React, { useState, useEffect } from 'react';
import './Table.css';

const TableBody = (props) => {
  const [style, setStyle] = useState('crypto-butler-tbody');

  useEffect(() => {
    setStyle(props.style);
  }, []);

  return <div className={style}>{props.children}</div>;
};

export default TableBody;

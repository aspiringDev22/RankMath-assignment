import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const CustomButton = ({ text }) => {
  return (
    <button className="action-button">
      <FaDollarSign size="40"  className={text == "Buy BTC" ? "icon buyBTC" : "icon sellBTC"} />
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;

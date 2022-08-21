import React from "react";
import '../stylesheets/Button.css';

function Button({ tabKey, symbol, name, formula, type, handleClick }) {

  // const isOperator = (type) => {
  //   type = 'operator' ? 
  // }

  return (
    // <div className={`button-container ${type === 'operator' ? 'operator' : ''}`}>
    <div 
      className={`button-container ${type}`} id={tabKey}
      onClick={() => handleClick(symbol,formula)}
    >
      {symbol}
    </div>
  )
}

export default Button

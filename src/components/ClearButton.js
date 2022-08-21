import React from "react";
import '../stylesheets/ClearButton.css';

const ClearButton = ( props ) => {
  return (
  <div className="button-clear" onClick={() => props.onClick()}>
    {props.children}
  </div>
  )
};

export default ClearButton;

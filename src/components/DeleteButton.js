import React from "react";
import '../stylesheets/DeleteButton.css';

const DeleteButton = ( props ) => {
  return (
  <div className="button-delete" onClick={() => props.onClick()}>
    {props.children}
  </div>
  )
};

export default DeleteButton;

import React from "react";
import "./Result.css";

export const Result = props => (

  <div className="result">
  <div className="resultHeader">Last 10 calculation results:</div>
  {props.input.map(input => <p>{input}</p>)}

  </div>

);

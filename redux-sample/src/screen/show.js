import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
  const divStyle = {
    textAlign: "center",
    marginTop: "10px",
    "ul" : {
      listStyle: "none"
    }
  };

  const ulStyle = {
    listStyle: "none"
  }

  return (
    <div style={divStyle}>
      <ul style={ulStyle}>
        <li>カウント：{props.count}</li>
        <li>値：{props.input}</li>
      </ul>
      <Link to="/click">セットへ</Link>
    </div>

  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default (props) => {

  const style = {
    textAlign: "center",
    marginTop: "10px"
  };

  const [input, setInput] = useState(props.input);

  /**
   * inputを変更
   */
  const changeInput = (e) => {
    setInput(e.target.value);
  }
  
  return (
    <div style={style}>
      <input type="text" value={input} onChange={changeInput}></input>
      <button onClick={() => props.setInputClick(input)}>値セット</button>
      <br/><Link to="/show">表示へ</Link>
    </div>
  );
}
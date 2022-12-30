import React from 'react';
import { useState } from 'react';

function Square(){
  const [value, setValue] = useState(null);

  function handleClick(){
    setValue('X')
  }

  return(
    <div>
      <button className='square' onClick={handleClick}>{value}</button>
    </div>
  )
}

function Board() {
  return (
    <div>
      <div className="container">
        <div className="row-one">
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className="row-two">
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div className="row-three">
          <Square/>
          <Square/>
          <Square/>
        </div>
      </div>
    </div>
  )
}

export default Board

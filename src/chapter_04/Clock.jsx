import React from "react";

function Clock(props){
  return(
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간:: {new Date().toLocaleTimeString()}</h2>
      <h3 style={{display: (new Date().getSeconds() % 2 === 0) ? 'block' : 'none'}}>똑</h3>
      <h3 style={{display: (new Date().getSeconds() % 2 != 0) ? 'block' : 'none'}}>딱</h3>
    </div>
  )
}

export default Clock;
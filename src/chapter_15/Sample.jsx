import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${props => props.dark ? "white" : "black"};
  background: ${props => props.dark ? "black" : "white"};
  border: solid 1px black;
`;

function Sample(props){
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return(
    <div>
      <Button onClick={handleClick}>Normal</Button>
      <Button dark onClick={handleClick}>Dark</Button>
    </div>
  )
}
export default Sample;
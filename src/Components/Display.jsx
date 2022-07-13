import React from "react";
import { StyledDisplay } from "./Styles/StyledDisplay";

const Display = ({ gameOver, text}) => {
  return(
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
  )
}

export default Display;
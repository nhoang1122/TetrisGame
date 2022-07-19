// import React from 'react'
// import { StyledScoreBoard } from './Styles/StyledScoreBoard'


// const ScoreBoard = () => {
//   return (
//     <StyledScoreBoard>
//         <h2>TOP 3</h2>
//         <h3>JNH : 1000</h3>
//         <h3>JNH : 720</h3>
//         <h3>JNH : 713</h3>
//     </StyledScoreBoard>
//   )
// }

// export default ScoreBoard

import { StyledScoreBoard, StyledSaveBtn } from './Styles/StyledScoreBoard'
import axios from "axios";
import { useEffect, useState } from "react";

const ScoreBoard = () => {
  return (
    <StyledScoreBoard>
      <h3>TOP 3</h3>
      <span>JNH</span>
      <span>LBJ</span>
      <span>KD7</span>
      <StyledSaveBtn>SAVE</StyledSaveBtn>
    </StyledScoreBoard>
  );
};

export default ScoreBoard;
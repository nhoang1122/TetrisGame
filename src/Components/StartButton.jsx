import React from "react";
import { StyledStartButton } from "./Styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>START</StyledStartButton>
)

export default StartButton;
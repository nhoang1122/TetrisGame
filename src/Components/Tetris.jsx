import React, { useState } from "react";
import { createStage } from "../gameHelper";

//STYLED COMPONENTS//
import { StyledTetrisWrapper, StyledTetris } from "./Styles/StyledTetris";

//HOOKS//
import { usePlayer } from "../Hooks/usePlayer";
import { useStage } from "../Hooks/useStage";

//COMPONENTS//
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");

  const movePlayer = (dir) => {
    updatePlayerPos({x:dir, y:0})
  }

  const startGame = () => {
    //RESET EVERYTHING//
    setStage(createStage());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false })
  }

  const dropPlayer= () => {
    drop();
  }

  const move = ({keyCode}) => {
    if(!gameOver) {
      //37 IS LEFT KEY//
      //39 IS RIGHT KEY//
      if(keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer()
      }
    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage}></Stage>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="GAME OVER" />
          ) : (
            <div>
              <Display text="Score"></Display>
              <Display text="Rows"></Display>
              <Display text="Level"></Display>
            </div>
          )}
          <StartButton callback={startGame}></StartButton>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

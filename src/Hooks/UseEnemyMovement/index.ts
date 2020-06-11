import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection, Ewalker } from '../../settings/constants';
import { handleNextPosition, checkValidMovement} from '../../context/canvas/helpers'
import { CanvasContext } from '../../context/canvas';

function useEnemyMovement(inicialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const [positionState, updatePositionState] = React.useState(inicialPosition); //Retorna array [0, 1]
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);
  
  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const movement = canvasContext.updateCanvas(randomDirection, positionState, Ewalker.ENEMY);

    if (movement.nextMove.valid) {
      updateDirectionState(randomDirection);
      updatePositionState(movement.nextPosition);
    }

    if(movement.nextMove.dead) {
      setTimeout(() => {
        alert('Você morreu!');
      })
      window.location.reload();
    }
  }, 2000);

  return{
    position: positionState,
    direction: direction,
  }

}

export default useEnemyMovement;
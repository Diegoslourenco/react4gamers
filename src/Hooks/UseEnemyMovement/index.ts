import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition} from '../../context/canvas/helpers'

function useEnemyMovement(inicialPosition) {
  const [positionState, updatePositionState] = React.useState(inicialPosition); //Retorna array [0, 1]
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);
  
  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextMovement = handleNextPosition(randomDirection, positionState);

    updateDirectionState(randomDirection);
    updatePositionState(nextMovement);
  }, 2000);

  return{
    position: positionState,
    direction: direction,
  }

}

export default useEnemyMovement;
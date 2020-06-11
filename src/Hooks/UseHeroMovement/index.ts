import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection, Ewalker } from '../../settings/constants';
import { CanvasContext } from '../../context/canvas';
import { ChestsContext } from '../../context/chests';

function useHeroMovement(inicialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const chestsContext = React.useContext(ChestsContext);

  const [positionState, updatePositionState] = React.useState(inicialPosition); //Retorna array [0, 1]
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);
  
  useEventListener('keydown', (event: React.KeyboardEvent<HTMLElement>) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }

    const movement = canvasContext.updateCanvas(direction, positionState, Ewalker.HERO);

    if (movement.nextMove.valid) {
      updatePositionState(movement.nextPosition);
      updateDirectionState(direction);
    }

    if (movement.nextMove.dead) {
      setTimeout(() => {
        alert('Você morreu!');
      })
      window.location.reload();
    }

    if (movement.nextMove.chest) {
      chestsContext.updateOpenedChests(movement.nextPosition);
    }

    if(chestsContext.totalChests === chestsContext.openedChests.total && movement.nextMove.door) {
      alert('Você ganhou!');      
    }
  });

  return{
    position: positionState,
    direction: direction,
  }

}

export default useHeroMovement
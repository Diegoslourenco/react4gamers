import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../context/canvas/helpers';

function useHeroMovement(inicialPosition) {
  const [positionState, updatePositionState] = React.useState(inicialPosition); //Retorna array [0, 1]
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);
  
  useEventListener('keydown', (event: React.KeyboardEvent<HTMLElement>) => {
    const direction = event.key as EDirection;

    const nextPosition = handleNextPosition(direction, positionState);
    updatePositionState(nextPosition);
    updateDirectionState(direction);

  });

  return{
    position: positionState,
    direction: direction,
  }

}

export default useHeroMovement
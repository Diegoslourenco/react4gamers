import React from 'react';
import Hero from '../Hero';
import { GAME_SIZE } from '../../settings/constants';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { canvas, ECanvas } from '../../context/canvas/helpers';
import { ChestsContext } from '../../context/chests';

function getCanvasMap() {
    
  const array  = [];
  
  for (let y = 0; y < canvas.length; y++ ) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasX = canvasY[x]; 

      const position = {x: x, y: y }; //pegando a posição
      const text = canvas[y][x] || canvasX; //pegando o valor exato 
      const key = `${x}-${y}`;

      if (text === ECanvas.TRAP) {
        array.push(<Trap key={key} initialPosition={position} />)
      }

      if (text === ECanvas.MINI_DEMON) {
        array.push(<MiniDemon key={key} initialPosition={position} />)
      }

      if (text === ECanvas.DEMON) {
        array.push(<Demon key={key} initialPosition={position} />)
      }

      if (text === ECanvas.CHEST) {
        array.push(<Chest key={key} initialPosition={position} />)
      }

      if (text === ECanvas.HERO) {
        array.push(<Hero key={key} initialPosition={position} />)
      }

      //array.push(<Tile key={key} position={position} text={text} />)
    }
  }

  return array;
}

const elements = getCanvasMap();
const Board = () => {
  const chestsContext = React.useContext(ChestsContext);

  function renderOpenedDoor(){
    return  (
      <img src="./assets/DOOR-OPEN.png" alt="" style={{
        position: "absolute",
        left: 578,
        top: 0,
      }} />
    )
  }

  return(
    <div>
      {elements}

      {chestsContext.totalChests === chestsContext.openedChests.total && (
          renderOpenedDoor()        
      )}   

      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  
  );
}

export default Board;
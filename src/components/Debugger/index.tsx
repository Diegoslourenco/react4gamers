import React from 'react';
import Tile from './Tile';
import { CanvasContext } from '../../context/canvas';

function getCanvasMap(canvas) {
    
  const tileArray = [];
  
  for (let y = 0; y < canvas.length; y++ ) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasX = canvasY[x]; 

      const position = {x: x, y: y }; //pegando a posição
      const text = canvas[y][x] || canvasX; //pegando o valor exato 
      const key = `${x}-${y}`;

      tileArray.push(<Tile key={key} position={position} text={text} />)
    }
  }

  return tileArray;
}

function Debugger() {
  const canvasContext = React.useContext(CanvasContext);
  const tiles = getCanvasMap(canvasContext.canvas);

  return(
    <div>
      {tiles}
    </div>

  );
};

export default Debugger
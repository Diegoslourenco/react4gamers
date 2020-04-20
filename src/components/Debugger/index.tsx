import React from 'react';
import Tile from './Tile';
import {canvas} from '../../context/canvas/helpers'

function getCanvasMap() {
    
  const tileArray = [];
  
  for (let y = 0; y < canvas.length; y++ ) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasX = canvasY[x]; 

      const position = {x: x, y: y }; //pegando a posição
      const text = canvas[y][x]; //pegando o valor exato 

      tileArray.push(<Tile position={position} text={text} />)
    }
  }

  return tileArray;
}

function Debugger() {
  const tiles = getCanvasMap();
  return(
    <div>
      {tiles}
    </div>

  );
};

export default Debugger
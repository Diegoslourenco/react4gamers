import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants';

const Chest = () => {
   return(
     <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 9,
        left: TILE_SIZE * 6,
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundImage: "url(./assets/CHEST.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'chest-animation 1s steps(3) infinite'
        
      }}
    />
  )
}

export default Chest;
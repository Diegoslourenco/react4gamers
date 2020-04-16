import React from 'react';
import './index.css';
import { TILE_SIZE } from '../../settings/constants';

const Hero = () => {
   return(
     <div
      style={{
        position: 'absolute',
        bottom: 48 * 1,
        left: 0,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 1s steps(4) infinite'
        
      }}
    />
  )
}

export default Hero;
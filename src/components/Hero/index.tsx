import React from 'react';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useHeroMovement from '../../Hooks/UseHeroMovement'

const inicialPosition ={
  x: 15,
  y: 15
};

const Hero = () => {
  const { position, direction }  = useHeroMovement(inicialPosition);

  return(
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'hero-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1 //profundidade de 1
      }}
    />
  )
}

export default Hero;
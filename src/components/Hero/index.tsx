import React from 'react';
import './index.css';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useHeroMovement from '../../Hooks/UseHeroMovement'
import { Interface } from 'readline';

interface IProps {
  initialPosition: { x: number; y: number }
};

const Hero = (props: IProps) => {
  const { position, direction }  = useHeroMovement(props.initialPosition);

  return(
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position.y - HEAD_OFFSET, //Para que o pé do herói fique no quadrado
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET, //Para não corta a imagem do herói
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
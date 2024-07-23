import React, { useEffect } from 'react';
import styles from './Unown.module.css';

//constant list of unowns
//currently set up for unowns of each index to always generate in the same 'lane'
const Unowns = [
  '/unowns/j-clear.png',
  '/unowns/u-clear.png',
  '/unowns/l-clear.png',
  '/unowns/i-clear.png',
  '/unowns/a-clear.png',
  '/unowns/n-clear.png',
  '/unowns/s-clear.png',
  '/unowns/p-clear.png',
  '/unowns/r-clear.png',
  '/unowns/i-clear.png',
  '/unowns/n-clear.png',
  '/unowns/g-clear.png',
]

const Floating: React.FC = () => {
  useEffect(() => {
    const addFloatingImage = () => {
      const container = document.querySelector(`.${styles.imageContainer}`);
      if (container) {
        const img = document.createElement('img');
        const idx = Math.floor(Math.random() * Unowns.length)
        img.src = Unowns[idx];
        img.className = styles.floatingImage;
  
        //within the container width
        const containerWidth = container.clientWidth;
        img.style.left = `${(containerWidth/Unowns.length * idx) + 150}px`;
        img.style.animationDelay = `${0}s`; //stagger animations
        container.appendChild(img); //add unown to web container

        //remove image after animation ends
        img.addEventListener('animationend', () => {
          container.removeChild(img);
        });
      }
    };

    //add new images at intervals
    const interval = setInterval(addFloatingImage, 320);
    return () => clearInterval(interval);
  }, []);

  return <div className={styles.imageContainer}></div>;
};

export default Floating;

import React from 'react';
import SVGPics from '../../assets/img/_sprite.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <svg className={styles.logo} role='img' aria-label='Логотип Chick-chik'>
      <use href={`${SVGPics}#logo`} />
    </svg>
  );
};

export default Logo;

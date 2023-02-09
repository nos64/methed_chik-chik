import React from 'react';
import styles from './MainButton.module.scss';

const MainButton = () => {
  return (
    <a href='#reserve' className={styles['main-link']}>
      Записаться
    </a>
  );
};

export default MainButton;

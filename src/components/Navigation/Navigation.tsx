import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.header__navigation + ' ' + styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          <a href='#price' className={styles.navigation__link}>
            Стоимость услуг
          </a>
        </li>
        <li className={styles.navigation__item}>
          <a href='#about' className={styles.navigation__link}>
            О нас
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import Container from '../Container';
import React from 'react';
import Logo from '../Logo';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Logo />
        <div className={styles.footer__navigation + ' ' + styles.navigation}>
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
        </div>

        <ul className={styles.production__list}>
          <li className={styles.production__item}>
            Designer:
            <a className={styles.production__link} href='' target='_blank'>
              Anastasia Ilina
            </a>
          </li>
          <li className={styles.production__item}>
            Developer:
            <a
              className={styles.production__link}
              href='https://github.com/nos64'
              target='_blank'
              rel='noreferrer'
            >
              Mikhail Nosov
            </a>
          </li>
        </ul>
        <p className={styles.footer__copyright}>© chik chik, 2023</p>
      </Container>
    </footer>
  );
};

export default Footer;

import Container from '../Container';
import Logo from '../Logo';
import MainButton from '../MainButton';
import Navigation from '../Navigation';
import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__container}>
          <Logo />
          <Navigation />
          <MainButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;

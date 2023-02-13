import Container from '../Container';
import Slider from '../Slider';
import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.hero__title}>
          <span className={styles.visuallyHidden}>Барбершоп - Chik-chick</span>
          <span>Мы создаём искусство, которое не стыдно показать</span>
        </h1>
        <Slider />
      </Container>
    </section>
  );
};

export default Hero;

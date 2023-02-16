import Container from '../Container';
import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about} id='about'>
      <Container>
        <h2 className={styles.about__title}>Мы помогаем всем мужчинам выглядеть уверенно</h2>

        <p className={styles.about__description}>
          Сhik chik — это намного больше, чем просто барберная. Это место, где вам помогут найти
          свой собственный, неповторимый стиль. Стоит довериться нашим мастерам один раз, и,
          поверьте, новый образ не оставит Вас равнодушным. Мужские стрижки и опасное бритье — это
          наш профиль, и мы уверены, что наши барберы делают это лучше всех.
        </p>
        <ul className={styles.about__list}>
          <li className={styles.about__item + ' ' + styles.about__item_top}>
            <h3 className={styles.about__itemTitle}>Топ специалисты</h3>
            <p className={styles.about__itemDescription}>Мы подстрижем вас на высшем уровне</p>
          </li>
          <li className={styles.about__item + ' ' + styles.about__item_master}>
            <h3 className={styles.about__itemTtitle}>Мастера бород и усов</h3>
            <p className={styles.about__itemDescription}>Мы заботливо уложим вашу бороду и усы</p>
          </li>
          <li className={styles.about__item + ' ' + styles.about__item_guarantee}>
            <h3 className={styles.about__itemTitle}>Гарантия качества</h3>
            <p className={styles.about__itemDescription}>
              Мы используем только профессиональные средства
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default About;

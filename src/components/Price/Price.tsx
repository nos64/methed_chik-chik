import MainButton from '../MainButton';
import React from 'react';
import Container from '../Container';
import styles from './Price.module.scss';

const Price = () => {
  return (
    <section className={styles.price} id='price'>
      <Container>
        <h2 className={styles.price__title}>Стоимость наших услуг</h2>
        <p className={styles.price__tagline}>...бесценна, но всё же</p>

        <div className={styles.price__wrapperContent}>
          <div className={styles.price__content}>
            <ul className={styles.price__list}>
              <li className={styles.price__item}>
                <span className={styles.price__itemTitle}>Стрижка ножницами</span>
                <span className={styles.price__itemCount}>2500 руб</span>
              </li>
              <li className={styles.price__item}>
                <span className={styles.price__itemTitle}>Стрижка машинкой</span>
                <span className={styles.price__itemCount}>2000 руб</span>
              </li>
              <li className={styles.price__item}>
                <span className={styles.price__itemTitle}>Стрижка + Стрижка бороды</span>
                <span className={styles.price__itemCount}>3000 руб</span>
              </li>
              <li className={styles.price__item}>
                <span className={styles.price__itemTitle}>Стрижка + Моделирование бороды</span>
                <span className={styles.price__itemCount}>4000 руб</span>
              </li>
              <li className={styles.price__item}>
                <span className={styles.price__itemTitle}>Бритье головы</span>
                <span className={styles.price__itemCount}>1500 руб</span>
              </li>
              <li className={styles.price__item}>
                <span className={styles.price__itemTitle}>Укладка</span>
                <span className={styles.price__itemCount}>1500 руб</span>
              </li>
              <li className={styles.price__item}>
                <span className={styles.price__itemTitle}>Оформление бровей</span>
                <span className={styles.price__itemCount}>1000 руб</span>
              </li>
            </ul>

            <MainButton />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Price;

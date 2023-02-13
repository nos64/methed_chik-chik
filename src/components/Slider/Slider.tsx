import React from 'react';
import styles from './Slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.hero__slider + ' ' + styles.slider}>
      <div className={styles.slider__container}>
        <ul className={styles.slider__list}>
          <li className={styles.slider__item}>
            <img
              className={styles.slider__image}
              src='img/photo-1.jpg'
              srcSet='img/photo-1-x2.jpg'
              alt='Вариант стрижки - рок'
            />
          </li>
          <li className={styles.slider__item + ' ' + styles.slider__item_active}>
            <img
              className={styles.slider__image}
              src='img/photo-2.jpg'
              srcSet='img/photo-2-x2.jpg'
              alt='Вариант стрижки - модельная'
            />
          </li>
          <li className={styles.slider__item}>
            <img
              className={styles.slider__image}
              src='img/photo-3.jpg'
              srcSet='img/photo-3-x2.jpg'
              alt='Вариант стрижки - длинные классика'
            />
          </li>
          <li className={styles.slider__item}>
            <img
              className={styles.slider__image}
              src='img/photo-4.jpg'
              srcSet='img/photo-4-x2.jpg'
              alt='Вариант стрижки - химическая завивка'
            />
          </li>
          <li className={styles.slider__item}>
            <img
              className={styles.slider__image}
              src='img/photo-5.jpg'
              srcSet='img/photo-5-x2.jpg'
              alt='Вариант стрижки - супер-стильно'
            />
          </li>
          <li className={styles.slider__item}>
            <img
              className={styles.slider__image}
              src='img/photo-6.jpg'
              srcSet='img/photo-6-x2.jpg'
              alt='Вариант стрижки - укладка'
            />
          </li>
          <li className={styles.slider__item}>
            <img
              className={styles.slider__image}
              src='img/photo-7.jpg'
              srcSet='img/photo-7-x2.jpg'
              alt='Вариант стрижки - вечная классика'
            />
          </li>
          <li className={styles.slider__item}>
            <img
              className={styles.slider__image}
              src='img/photo-8.jpg'
              srcSet='img/photo-8-x2.jpg'
              alt='Вариант стрижки - начес'
            />
          </li>
        </ul>

        <button
          className={styles.slider__arrow + ' ' + styles.slider__arrow_left}
          aria-label='Предыдущий слайд'
        ></button>
        <button
          className={styles.slider__arrow + ' ' + styles.slider__arrow_right}
          aria-label='Следующий слайд'
        ></button>
      </div>
    </div>
  );
};

export default Slider;

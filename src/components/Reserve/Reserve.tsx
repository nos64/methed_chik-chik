import MainButton from '../MainButton';
import React from 'react';
import styles from './Reserve.module.scss';
import Container from '../Container';

const Reserve = () => {
  return (
    <section className={styles.reserve} id='reserve'>
      <Container>
        <h2 className={styles.reserve__title}>Как записаться к нам</h2>

        <ol className={styles.reserve__list}>
          <li className={styles.reserve__item}>Выберите услугу, можно выбрать сразу несколько</li>
          <li className={styles.reserve__item}>Выберите специалиста</li>
          <li className={styles.reserve__item}>Выберите удобный день и время</li>
        </ol>

        <form className={styles.reserve__form}>
          <div className={styles.reserve__formContainer}>
            <fieldset className={styles.reserve__fieldset}>
              <legend className={styles.reserve__legend}>Услуга</legend>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='service' />
                <span className={styles.radio__label}>Стрижка ножницами</span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='service' />
                <span className={styles.radio__label}>Стрижка ножницами</span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='service' />
                <span className={styles.radio__label}>Стрижка машинкой</span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='service' />
                <span className={styles.radio__label}>Стрижка + Стрижка бороды</span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='service' />
                <span className={styles.radio__label}>Стрижка + Моделирование бороды</span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='service' />
                <span className={styles.radio__label}>Укладка</span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='service' />
                <span className={styles.radio__label}>Оформление бровей</span>
              </label>
            </fieldset>

            <fieldset className={styles.reserve__fieldset}>
              <legend className={styles.reserve__legend}>Специалист</legend>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='spec' />
                <span className={styles.radio__label + ' ' + styles.radio__label_spec}>Игорь</span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='spec' />
                <span
                  className={styles.radio__label + ' ' + styles.radio__label_spec}
                  // style={{'--bg-image: url(../assets/img/spec2.png)'}}
                >
                  Анатолий
                </span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='spec' />
                <span
                  className={styles.radio__label + ' ' + styles.radio__label_spec}
                  // style={{'--bg-image: url(../assets/spec3.png)'}}
                >
                  Руслан
                </span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='spec' />
                <span
                  className={styles.radio__label + ' ' + styles.radio__label_spec}
                  // style={{'--bg-image: url(../assets/spec4.png)'}}
                >
                  Михаил
                </span>
              </label>

              <label className={styles.radio}>
                <input className={styles.radio__input} type='radio' name='spec' />
                <span
                  className={styles.radio__label + ' ' + styles.radio__label_spec}
                  // style={{'--bg-image: url(../assets/spec5.png)'}}
                >
                  Евгений
                </span>
              </label>
            </fieldset>

            <fieldset className={styles.reserve__fieldset}>
              <legend className={styles.reserve__legend}>Дата и время</legend>

              <fieldset className={styles.reserve__fieldset + ' ' + styles.reserve__fieldset_sub}>
                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='month' />
                  <span className={styles.radio__label}>Январь</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='month' />
                  <span className={styles.radio__label}>Февраль</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='month' />
                  <span className={styles.radio__label}>Март</span>
                </label>
              </fieldset>

              <fieldset className={styles.reserve__fieldset + ' ' + styles.reserve__fieldset_sub}>
                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='day' />
                  <span className={styles.radio__label}>18 января</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='day' />
                  <span className={styles.radio__label}>19 января</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='day' />
                  <span className={styles.radio__label}>20 января</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='day' />
                  <span className={styles.radio__label}>21 января</span>
                </label>
              </fieldset>

              <fieldset className={styles.reserve__fieldset + ' ' + styles.reserve__fieldset_sub}>
                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='time' />
                  <span className={styles.radio__label}>10:00-11:30</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='time' />
                  <span className={styles.radio__label}>11:30-13:00</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='time' />
                  <span className={styles.radio__label}>13:00-14:30</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='time' />
                  <span className={styles.radio__label}>14:30-16:00</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='time' />
                  <span className={styles.radio__label}>16:00-17:30</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='time' />
                  <span className={styles.radio__label}>17:30-19:00</span>
                </label>

                <label className={styles.radio}>
                  <input className={styles.radio__input} type='radio' name='time' />
                  <span className={styles.radio__label}>19:00-20:30</span>
                </label>
              </fieldset>
            </fieldset>
          </div>

          <MainButton />
        </form>
      </Container>
    </section>
  );
};

export default Reserve;

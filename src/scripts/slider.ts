const addPreload = (elem: Element | null) => {
  elem && elem.classList.add('preload');
};

const removePreload = (elem: Element | null) => {
  elem && elem.classList.remove('preload');
};

const startSlider = () => {
  const sliderItems: NodeListOf<HTMLLIElement> = document.querySelectorAll('.slider__item');
  const sliderList: HTMLUListElement | null = document.querySelector('.slider__list');
  const btnNextSlide: HTMLButtonElement | null = document.querySelector('.slider__arrow_right');
  const btnPrevSlide: HTMLButtonElement | null = document.querySelector('.slider__arrow_left');

  let activeSlide = 1;
  let position = 0;

  const checkStartAndLastSlider = () => {
    if (
      (activeSlide + 2 === sliderItems.length && document.documentElement.offsetWidth > 560) ||
      activeSlide === sliderItems.length
    ) {
      if (btnNextSlide && btnNextSlide instanceof HTMLButtonElement) {
        btnNextSlide.style.display = 'none';
      }
    } else {
      if (btnNextSlide && btnNextSlide instanceof HTMLButtonElement) {
        btnNextSlide.style.display = '';
      }
    }

    if (activeSlide === 1) {
      if (btnPrevSlide && btnPrevSlide instanceof HTMLButtonElement) {
        btnPrevSlide.style.display = 'none';
      }
    } else {
      if (btnPrevSlide && btnPrevSlide instanceof HTMLButtonElement) {
        btnPrevSlide.style.display = '';
      }
    }
  };

  checkStartAndLastSlider(); //запск проверки слайдера при загрузке

  const nextSlide = () => {
    sliderItems[activeSlide]?.classList.remove('slider__item_active');
    position = -sliderItems[0].clientWidth * activeSlide;

    if (sliderList && sliderList instanceof HTMLUListElement) {
      sliderList.style.transform = `translateX(${position}px)`;
    }

    activeSlide += 1;
    sliderItems[activeSlide]?.classList.add('slider__item_active');

    checkStartAndLastSlider();
  };

  const prevSlide = () => {
    sliderItems[activeSlide]?.classList.remove('slider__item_active');
    position = -sliderItems[0].clientWidth * (activeSlide - 2);

    if (sliderList && sliderList instanceof HTMLUListElement) {
      sliderList.style.transform = `translateX(${position}px)`;
    }

    activeSlide -= 1;
    sliderItems[activeSlide]?.classList.add('slider__item_active');

    checkStartAndLastSlider();
  };

  btnNextSlide?.addEventListener('click', nextSlide);
  btnPrevSlide?.addEventListener('click', prevSlide);

  //для корректной работы слайдера при ресайзе
  window.addEventListener('resize', () => {
    setTimeout(() => {
      if (activeSlide + 2 > sliderItems.length && document.documentElement.offsetWidth > 560) {
        activeSlide = sliderItems.length - 2;
        sliderItems[activeSlide]?.classList.add('slider__item_active');
      }

      position = -sliderItems[0].clientWidth * (activeSlide - 1);
      if (sliderList && sliderList instanceof HTMLUListElement) {
        sliderList.style.transform = `translateX(${position}px)`;
      }
      checkStartAndLastSlider();
    }, 100);
  });
};

const initSlider = () => {
  const slider = document.querySelector('.slider');
  const sliderContainer: HTMLDivElement | null = document.querySelector('.slider__container');

  if (sliderContainer && sliderContainer instanceof HTMLDivElement) {
    sliderContainer.style.display = 'none';
  }

  addPreload(slider); //вызов прелоадера слайдера
  //когда полностью загрузится страница вместе с картинками (load) убрать прелоадер
  window.addEventListener('load', () => {
    if (sliderContainer && sliderContainer instanceof HTMLDivElement) {
      sliderContainer.style.display = '';
    }
    removePreload(slider); //когда слайдер загрузился - удаляем прелоадер
    startSlider(); //запускаем слайдер
  });
};
//когда полностью загрузится html без картинкок (DOMContentLoaded) убрать прелоадер
window.addEventListener('DOMContentLoaded', initSlider);

import './slider';
import './service';
import { initSlider } from './slider';
import { initService } from './service';
import { initReserve } from './reserve';

export const addPreload = (elem: Element | null) => {
  elem && elem.classList.add('preload');
};

export const removePreload = (elem: Element | null) => {
  elem && elem.classList.remove('preload');
};

const init = () => {
  initSlider();
  initService();
  initReserve();
};

window.addEventListener('DOMContentLoaded', init);

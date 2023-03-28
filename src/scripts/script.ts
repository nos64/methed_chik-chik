import './slider';
import './service';
import { initSlider } from './slider';
import { initService } from './service';

export const addPreload = (elem: Element | null) => {
  elem && elem.classList.add('preload');
};

export const removePreload = (elem: Element | null) => {
  elem && elem.classList.remove('preload');
};

const init = () => {
  initSlider();
  initService();
};

window.addEventListener('DOMContentLoaded', init);

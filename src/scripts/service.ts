import { addPreload, removePreload } from './script';
import { API_URL } from './constants';

interface IPriceItem {
  id: string;
  name: string;
  price: string;
}

const renderPrice = (wrapper: HTMLUListElement, data: IPriceItem[]) => {
  data.forEach((item: IPriceItem) => {
    const priceItem = document.createElement('li');
    priceItem.classList.add('price__item');

    const priceItemTitle = document.createElement('span');
    priceItemTitle.classList.add('price__item-title');
    priceItemTitle.textContent = item.name;

    const priceItemCount = document.createElement('span');
    priceItemCount.classList.add('price__item-count');
    priceItemCount.textContent = `${item.price} руб`;

    priceItem.append(priceItemTitle, priceItemCount);
    wrapper.append(priceItem);
  });
};

const renderService = (wrapper: HTMLFieldSetElement, data: IPriceItem[]) => {
  const labels = data.map((item: IPriceItem) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    const input = document.createElement('input');
    input.classList.add('radio__input');
    input.type = 'radio';
    input.name = 'service';
    input.value = item.id;

    const span = document.createElement('span');
    span.classList.add('radio__label');
    span.textContent = item.name;

    label.append(input, span);

    return label;
  });

  wrapper.append(...labels);
};

export const initService = () => {
  const priceList: HTMLUListElement | null = document.querySelector('.price__list');
  const reserveFieldsetService: HTMLFieldSetElement | null = document.querySelector(
    '.reserve__fieldset_service'
  );

  if (priceList && priceList instanceof HTMLUListElement) {
    priceList.textContent = '';

    addPreload(priceList);

    fetch(`${API_URL}/api`)
      .then((response) => response.json())
      .then((data: IPriceItem[]) => {
        renderPrice(priceList, data);
        removePreload(priceList);
      });
  }

  if (reserveFieldsetService && reserveFieldsetService instanceof HTMLFieldSetElement) {
    reserveFieldsetService.innerHTML = '<legend class="reserve__legend">Услуга</legend>';
    addPreload(reserveFieldsetService);

    fetch(`${API_URL}/api`)
      .then((response) => response.json())
      .then((data: IPriceItem[]) => {
        renderService(reserveFieldsetService, data);
        removePreload(reserveFieldsetService);
      });
  }
};

//Окончил на 29минуте

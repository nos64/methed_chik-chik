import { API_URL } from './constants';
import { addPreload, removePreload } from './script';

const year = new Date().getFullYear();

const addDisabled = (arr: (HTMLFieldSetElement | HTMLButtonElement)[]) => {
  arr.forEach((element: HTMLFieldSetElement | HTMLButtonElement) => {
    element.disabled = true;
  });
};

const removeDisabled = (arr: (HTMLFieldSetElement | HTMLButtonElement)[]) => {
  arr.forEach((element: HTMLFieldSetElement | HTMLButtonElement) => {
    element.disabled = false;
  });
};

interface ISpecItem {
  id: string;
  name: string;
  img: string;
}

const renderSpec = (wrapper: HTMLFieldSetElement, data: ISpecItem[]) => {
  const labels = data.map((item: ISpecItem) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    const input = document.createElement('input');
    input.classList.add('radio__input');
    input.type = 'radio';
    input.name = 'spec';
    input.value = item.id;

    const span = document.createElement('span');
    span.classList.add('radio__label');
    span.classList.add('radio__label_spec');
    span.textContent = item.name;
    span.setAttribute('style', `--bg-image: url(${API_URL}/${item.img}`);

    label.append(input, span);

    return label;
  });

  wrapper.append(...labels);
};

const renderMonth = (wrapper: HTMLFieldSetElement, data: string[]) => {
  const labels = data.map((month: string) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    const input = document.createElement('input');
    input.classList.add('radio__input');
    input.type = 'radio';
    input.name = 'month';
    input.value = month;

    const span = document.createElement('span');
    span.classList.add('radio__label');
    span.textContent = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
    }).format(new Date(year, +month));

    label.append(input, span);

    return label;
  });

  wrapper.append(...labels);
};

const renderDay = (wrapper: HTMLFieldSetElement, data: string[], month: string) => {
  const labels = data.map((day: string) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    const input = document.createElement('input');
    input.classList.add('radio__input');
    input.type = 'radio';
    input.name = 'day';
    input.value = day;

    const span = document.createElement('span');
    span.classList.add('radio__label');
    span.textContent = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
      day: 'numeric',
    }).format(new Date(year, +month, +day));

    label.append(input, span);

    return label;
  });

  wrapper.append(...labels);
};

const renderTime = (wrapper: HTMLFieldSetElement, data: string[]) => {
  const labels = data.map((time: string) => {
    const label = document.createElement('label');
    label.classList.add('radio');

    const input = document.createElement('input');
    input.classList.add('radio__input');
    input.type = 'radio';
    input.name = 'time';
    input.value = time;

    const span = document.createElement('span');
    span.classList.add('radio__label');
    span.textContent = time;

    label.append(input, span);

    return label;
  });

  wrapper.append(...labels);
};

interface IReserveFormElement {
  [key: string]: HTMLFieldSetElement | HTMLButtonElement;
}

export const initReserve = () => {
  const reserveForm: HTMLFormElement | null = document.querySelector('.reserve__form');

  if (reserveForm && reserveForm instanceof HTMLFormElement) {
    const {
      fieldservice,
      fieldspec,
      fielddate,
      fieldmonth,
      fieldday,
      fieldtime,
      btn,
    }: IReserveFormElement = reserveForm;

    addDisabled([fieldspec, fielddate, fieldmonth, fieldday, fieldtime, btn]);

    reserveForm.addEventListener('change', async (e: Event) => {
      const target = e.target;

      if (target && target instanceof HTMLInputElement && target.name === 'service') {
        addDisabled([fieldspec, fielddate, fieldmonth, fieldday, fieldtime, btn]);
        fieldspec.innerHTML = '<legend class="reserve__legend">Специалист</legend>';

        addPreload(fieldspec);

        const response = await fetch(`${API_URL}/api?service=${target.value}`);
        const data = await response.json();

        if (fieldspec instanceof HTMLFieldSetElement) {
          renderSpec(fieldspec, data);
          removePreload(fieldspec);
          removeDisabled([fieldspec]);
        }
      }

      if (target && target instanceof HTMLInputElement && target.name === 'spec') {
        addDisabled([fielddate, fieldmonth, fieldday, fieldtime, btn]);

        addPreload(fieldmonth);

        const response = await fetch(`${API_URL}/api?spec=${target.value}`);
        const data = await response.json();
        fieldmonth.innerHTML = '';

        if (fieldmonth instanceof HTMLFieldSetElement) {
          renderMonth(fieldmonth, data);
          removePreload(fieldmonth);
          removeDisabled([fielddate, fieldmonth]);
        }
      }

      if (target && target instanceof HTMLInputElement && target.name === 'month') {
        addDisabled([fieldday, fieldtime, btn]);

        addPreload(fieldday);

        const response = await fetch(
          `${API_URL}/api?spec=${reserveForm.spec.value}&month=${target.value}`
        );
        const data = await response.json();

        fieldday.innerHTML = '';

        if (fieldday instanceof HTMLFieldSetElement) {
          renderDay(fieldday, data, reserveForm.month.value);
          removePreload(fieldday);
          removeDisabled([fieldday]);
        }
      }

      if (target && target instanceof HTMLInputElement && target.name === 'day') {
        addDisabled([fieldtime, btn]);

        addPreload(fieldtime);

        const response = await fetch(
          `${API_URL}/api?spec=${reserveForm.spec.value}&month=${reserveForm.month.value}&day=${target.value}`
        );
        const data = await response.json();

        fieldtime.innerHTML = '';

        if (fieldtime instanceof HTMLFieldSetElement) {
          renderTime(fieldtime, data);
          removePreload(fieldtime);
          removeDisabled([fieldtime]);
        }
      }

      if (target && target instanceof HTMLInputElement && target.name === 'time') {
        removeDisabled([btn]);
      }
    });

    reserveForm.addEventListener('submit', async (e: Event) => {
      e.preventDefault();

      const formData = new FormData(reserveForm);
      const json = JSON.stringify(Object.fromEntries(formData));

      const response = await fetch(`${API_URL}/api/order`, {
        method: 'POST',
        body: json,
      });

      const data = await response.json();

      addDisabled([fieldservice, fieldspec, fielddate, fieldmonth, fieldday, fieldtime, btn]);

      const p = document.createElement('p');
      p.textContent = `
        Спасибо за бронь #${data.id}!
        Ждём Вас ${new Intl.DateTimeFormat('ru-RU', {
          month: 'long',
          day: 'numeric',
        }).format(new Date(year, data.month, data.day))},
        время ${data.time}
        `;

      reserveForm.append(p);
    });
  }
};

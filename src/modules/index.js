import './acc.js';


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.header__button');

  btn.addEventListener('click', () => {
    // Создаем элементы модального окна
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('modal__close');
    closeBtn.innerHTML = `
    <svg width="42" height="42" viewBox="0 0 42 42"
     fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="38.4407" width="54.3632"
         height="5.03363" rx="2"
          transform="rotate(-45 0 38.4407)" fill="white" />
        <rect x="3.55957" width="54.3632"
         height="5.03363" rx="2"
          transform="rotate(45 3.55957 0)" fill="white" />
        </svg>
    `;

    const title = document.createElement('h2');
    title.classList.add('modal__title');
    title.textContent = 'Заказать звонок';

    const form = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Ваше имя';
    nameInput.required = true;

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.placeholder = 'Ваш телефон';
    phoneInput.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Отправить';

    // Добавляем все элементы в DOM
    form.appendChild(nameInput);
    form.appendChild(phoneInput);
    form.appendChild(submitBtn);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(form);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Закрытие модального окна при клике на крестик
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        document.body.removeChild(modal);
      }
    });
  });
});

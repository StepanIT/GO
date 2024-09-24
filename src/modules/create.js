export const openNavWindow = () => {
  const navWindow = document.createElement('div');
  navWindow.classList.add('nav-window', 'nav-window__show');

  const navContent = document.createElement('div');
  navContent.classList.add('nav__content');

  if (window.matchMedia('(min-width: 545x)').matches) {
    navContent.innerHTML = `
      <ul class="nav__list">
          <li class="nav__item">
              <a class="nav__text" href="index.html#rooms">Залы</a> 
          </li>
          <li class="nav__item">
              <a class="nav__text" href="index.html#we">О нас</a> 
          </li>
          <li class="nav__item">
              <a class="nav__text" href="index.html#book">Бронь</a> 
          </li>
          <li class="nav__item">
              <a class="nav__text" href="index.html#reviews">Отзывы</a>
          </li>
          <li class="nav__item">
              <a class="nav__text" href="index.html#address">Контакты</a> 
          </li>
      </ul>
  `;
  } else {
    navContent.innerHTML = `
      <ul class="nav__list">
          <li class="nav__item">
              <a class="nav__text" href="index.html#rooms">Залы</a> 
          </li>
          <li class="nav__item">
              <a class="nav__text" href="index.html#we">О нас</a> 
          </li>
          <li class="nav__item">
              <a class="nav__text" href="index.html#book">Бронь</a> 
          </li>
          <li class="nav__item">
              <a class="nav__text" href="index.html#reviews">Отзывы</a>
          </li>
          <li class="nav__item">
              <a class="nav__text" href="index.html#address">Контакты</a> 
          </li>
      </ul>
        <button class="header__button-open">Заказать звонок</button>
  `;
  }

  navWindow.appendChild(navContent);
  document.body.appendChild(navWindow);

  return {navWindow};
};


export const createModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal', 'modal__show');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal__content');

  const title = document.createElement('h2');
  title.classList.add('modal__title');
  title.textContent = 'Заказать звонок';

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('modal__close');
  closeBtn.innerHTML = `
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="38.4407" width="54.3632"
       height="5.03363" rx="2" transform="rotate(-45 0 38.4407)" fill="white" />
      <rect x="3.55957" width="54.3632"
       height="5.03363" rx="2" transform="rotate(45 3.55957 0)" fill="white" />
    </svg>
  `;

  const form = document.createElement('form');
  form.classList.add('form');
  form.insertAdjacentHTML('beforeend', `
    <div class="form-group">
      <label class="form-label" for="name">Имя</label>
      <input class="form-input" name="name" id="name" type="text" required>
    </div>
    <div class="form-group">
      <label class="form-label" for="phone">Телефон:</label>
      <input class="form-input" name="phone" id="phone" type="number" required>
    </div>
    <button class="modal__btn" type="submit">позвонить мне</button>
  `);

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(title);
  modalContent.appendChild(form);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  return {modal, form, closeBtn};
};

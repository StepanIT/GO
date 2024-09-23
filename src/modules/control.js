import {renderModal, renderMenu} from './render.js';

export const setupListeners = () => {
  const btn = document.querySelector('.header__button');
  btn.addEventListener('click', renderModal);
};

const navButton = document.querySelector('.header__button-list');
navButton.addEventListener('click', renderMenu);


export const formSubmit = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const closeModal = () => {
      form.reset();
    };

    closeModal();
  });
};

import {renderModal} from './render.js';

export const setupListeners = () => {
  const btn = document.querySelector('.header__button');
  btn.addEventListener('click', renderModal);
};

export const formSubmit = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const closeModal = () => {
      form.reset();
    };

    closeModal();
  });
};
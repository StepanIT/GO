import {renderModal} from './render.js';
import {openNavWindow} from './create.js';

export const setupListeners = () => {
  const btn = document.querySelector('.header__button');
  btn.addEventListener('click', renderModal);
};

const navButton = document.querySelector('.header__button-list');
navButton.addEventListener('click', openNavWindow);

export const formSubmit = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const closeModal = () => {
      form.reset();
    };

    closeModal();
  });
};

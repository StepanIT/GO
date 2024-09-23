import {createModal, openNavWindow} from './create.js';
import {formSubmit} from './control.js';

export const renderModal = () => {
  const {modal, form, closeBtn} = createModal();

  const closeModal = () => {
    form.reset();
    modal.classList.add('modal__hide');
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 400);
  };

  document.body.appendChild(modal);
  modal.classList.add('modal__show');

  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmit(form);
    closeModal();
  });
};

export const renderMenu = () => {
  const {navWindow} = openNavWindow();
  const closeMenu = () => {
    navWindow.style.display = 'none';
  }
  
  window.addEventListener('click', (e) => {
    if (e.target === navWindow) {
      closeMenu();
    }})
}
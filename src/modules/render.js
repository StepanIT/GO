import {createModal, openNavWindow} from './create.js';
import {formSubmit} from './control.js';

export const renderModal = () => {
  const {modal, form, closeBtn} = createModal();

  const closeModal = () => {
    form.reset();
    modal.classList.add('modal__hide');
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  };

  document.body.appendChild(modal);
  modal.classList.add('modal__show');

  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modal) {
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
  const navButton = document.querySelector('.header__button-list');


  const toggleButtonToClose = () => {
    navButton.classList.add('header__button-list__close');
    navButton.textContent = '';
  };

  const toggleButtonToOpen = () => {
    navButton.classList.remove('header__button-list__close');
    navButton.innerHTML = `
      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="27.5771" width="39" height="3.44828"
                 rx="1.72414" transform="rotate(-45 0 27.5771)"
                  fill="#6C0287" />
                <rect x="3.43848" width="39" height="3.44828"
                 rx="1.72414" transform="rotate(45 3.43848 0)" fill="#6C0287" />
              </svg>
    `;
  };

  const toggleReturnButton = () => {
    navButton.classList.add('header__button-list');
    navButton.innerHTML = `
      <svg width="54" height="29" viewBox="0 0 54 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="54" height="5" rx="2" fill="#6C0287" />
                <rect y="12" width="54" height="5" rx="2" fill="#6C0287" />
                <rect y="24" width="31" height="5" rx="2" fill="#6C0287" />
    `;
  };


  const closeMenu = () => {
    const duration = 300;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      navWindow.style.opacity = 1 - progress;
      navWindow.style.transform = `scale(${1 - 0.1 * progress})`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        document.body.removeChild(navWindow);
      }
    };
    toggleReturnButton();
    requestAnimationFrame(step);
  };

  document.body.appendChild(navWindow);
  toggleButtonToClose();
  toggleButtonToOpen();


  window.addEventListener('click', (e) => {
    const target = e.target;
    if (target === navWindow) {
      closeMenu();
    }
  });

  const navButtonCloseMenu = document.querySelector('.header__button-open');
  navButtonCloseMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target === navButtonCloseMenu) {
      closeMenu();
      renderModal();
    }
  });

  const navItems = navWindow.querySelectorAll('.nav__item');
  navItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
};


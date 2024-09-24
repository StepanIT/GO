const items = document.querySelectorAll('.questions__list-item');
const list = document.querySelectorAll('.btn-open');
const textWrapper = document.querySelectorAll('.questions__text-wrapper');

let targetHeight = '214px';

const updateTargetHeight = () => {
  if (window.matchMedia('(max-width: 545px)').matches) {
    targetHeight = '120px';
  } else if (window.matchMedia('(max-width: 965px)').matches) {
    targetHeight = '140px';
  } else if (window.matchMedia('(max-width: 1240px)').matches) {
    targetHeight = '150px';
  } else {
    targetHeight = '214px';
  }
};

updateTargetHeight();
window.addEventListener('resize', updateTargetHeight);

list.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        if (items[i].classList.contains('questions__text-inner')) {
          textWrapper[i].style.height = '';
        } else {
          textWrapper[i].style.height = targetHeight;
        }
        items[i].classList.toggle('questions__text-inner');
      } else {
        items[i].classList.remove('questions__text-inner');
        textWrapper[i].style.height = '';
      }
    }
  });
});


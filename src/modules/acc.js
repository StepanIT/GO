const items = document.querySelectorAll('.questions__list-item');
const buttons = document.querySelectorAll('.btn-open');
const textWrapper = document.querySelectorAll('.questions__text-wrapper');


let heightWrapper = 0;

textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
})

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        if (items[i].classList.contains('questions__text-inner')) {
          textWrapper[i].style.height = '';
        } else {
          textWrapper[i].style.height = `${heightWrapper}px`;
        }
        items[i].classList.toggle('questions__text-inner');
      } else {
        items[i].classList.remove('questions__text-inner');
        textWrapper[i].style.height = '';
      }
    }
  });
});
const items = document.querySelectorAll('.questions__list-item');
const buttons = document.querySelectorAll('.btn-open');
const textWrappers = document.querySelectorAll('.questions__text-wrapper');

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

// const purpleBtn = document.querySelector('.questions__img-white');

// Функция для установки высоты текстового контейнера
function setTextWrapperHeight(wrapper, height) {
  wrapper.style.height = height;
}

// Функция для открытия определенного текстового блока
function openTextBlock(index) {
  // Установим высоту текстового блока на целевую высоту
  setTextWrapperHeight(textWrappers[index], targetHeight);
  // Добавим класс, чтобы отобразить текст
  items[index].classList.add('questions__text-inner');
}

// Функция для закрытия всех текстовых блоков
function closeAllTextBlocks() {
  items.forEach((item, i) => {
      // Удаляем класс отображения текста
      item.classList.remove('questions__text-inner');
      // Сбрасываем высоту текстового контейнера
      setTextWrapperHeight(textWrappers[i], '0');
  });
}

const Btn1 = document.querySelector('.open1');
const Btn2 = document.querySelector('.open2');
const Btn3 = document.querySelector('.open3');
const Btn4 = document.querySelector('.open4');
const Btn5 = document.querySelector('.open5');

const toggleButtonAccClose1 = () => {
  Btn1.innerHTML = `
                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.8306 14H23.5086V34H22.8306V14Z"/>
                  <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
                 <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
                </svg>
        `
};
const toggleButtonAccClose2 = () => {
  Btn2.innerHTML = `
                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.8306 14H23.5086V34H22.8306V14Z"/>
                  <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
                 <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
                </svg>
        `
};
const toggleButtonAccClose3 = () => {
  Btn3.innerHTML = `
                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.8306 14H23.5086V34H22.8306V14Z"/>
                  <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
                 <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
                </svg>
        `
};
const toggleButtonAccClose4 = () => {
  Btn4.innerHTML = `
                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.8306 14H23.5086V34H22.8306V14Z"/>
                  <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
                 <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
                </svg>
        `
};
const toggleButtonAccClose5 = () => {
  Btn5.innerHTML = `
                <svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.8306 14H23.5086V34H22.8306V14Z"/>
                  <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
                 <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
                </svg>
        `
};



const toggleButtonAccOpen1 = () => {
  Btn1.innerHTML = `
<svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
               <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
              </svg>
        `
};
const toggleButtonAccOpen2 = () => {
  Btn2.innerHTML = `
<svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
               <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
              </svg>
        `;
};
const toggleButtonAccOpen3 = () => {
  Btn3.innerHTML = `
<svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
               <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
              </svg>
        `
};
const toggleButtonAccOpen4 = () => {
  Btn4.innerHTML = `
<svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
               <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
              </svg>
        `
};
const toggleButtonAccOpen5 = () => {
  Btn5.innerHTML = `
<svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
               <circle id="question__circle" cx="23.0001" cy="23" r="22" stroke-width="2"/>
              </svg>
        `
};



// Добавляем обработчик событий для каждой кнопки
buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
      // Проверяем, открыт ли текстовый блок
      const isActive = items[index].classList.contains('questions__text-inner');
      
      // Если блок уже открыт, просто закроем его
      if (isActive) {
          setTextWrapperHeight(textWrappers[index], '0');
          items[index].classList.remove('questions__text-inner');
          toggleButtonAccClose1();
          toggleButtonAccClose2();
          toggleButtonAccClose3();
          toggleButtonAccClose4();
          toggleButtonAccClose5();
      } else {
        toggleButtonAccOpen1();
        toggleButtonAccOpen2();
        toggleButtonAccOpen3();
        toggleButtonAccOpen4();
        toggleButtonAccOpen5();
          // Закрываем все текстовые блоки перед открытием нового
          closeAllTextBlocks();
          // Открываем текстовый блок, связанный с нажатой кнопкой
          openTextBlock(index);
      }
  });
});


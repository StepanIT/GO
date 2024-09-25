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

const setTextWrapperHeight = (wrapper, height) => {
  wrapper.style.height = height;
};

const openTextBlock = (index) => {
  setTextWrapperHeight(textWrappers[index], targetHeight);
  items[index].classList.add('questions__text-inner');
};

const closeAllTextBlocks = () => {
  items.forEach((item, i) => {
    item.classList.remove('questions__text-inner');
    setTextWrapperHeight(textWrappers[i], '0');
  });
};

const toggleSvgState = (svgElement, isOpen) => {
  if (isOpen) {
    svgElement.innerHTML = `
      <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
      <circle cx="23.0001" cy="23" r="22" stroke-width="2"/>
    `;
  } else {
    svgElement.innerHTML = `
      <path d="M22.8306 14H23.5086V34H22.8306V14Z"/>
      <path d="M13.0001 24.1695V23.4915H33.0001V24.1695H13.0001Z"/>
      <circle cx="23.0001" cy="23" r="22" stroke-width="2"/>
    `;
  }
};

buttons.forEach((btn, index) => {
  const svgElement = btn.querySelector('svg');

  btn.addEventListener('click', () => {
    const isActive = items[index].classList.contains('questions__text-inner');

    closeAllTextBlocks();
    buttons.forEach((button) => {
      const svg = button.querySelector('svg');
      toggleSvgState(svg, false);
    });

    if (!isActive) {
      openTextBlock(index);
      toggleSvgState(svgElement, true);
    }
  });
});


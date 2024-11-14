import './acc.js';
import './swiper.js';
import './validate.js';
import './flatpickr.js';
import {generalListeners} from './control.js';
import { initFlatpickr } from './flatpickr.js';

document.addEventListener('DOMContentLoaded', () => {
  generalListeners();
  initFlatpickr();
});

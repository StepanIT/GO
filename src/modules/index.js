import './acc.js';
import './swiper.js';
import './validate.js';
import './datepicker.js';
import {generalListeners} from './control.js';
import {initDatepicker} from './datepicker.js';

document.addEventListener('DOMContentLoaded', () => {
  generalListeners();
  initDatepicker();
});

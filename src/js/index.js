import btnFunc from './modules/info-btn.js';
btnFunc();

import('./modules/mobile-nav.js').then(module => {
  module.default();
});

import swiper from './modules/swiper.js';
swiper();

import tabControl from './modules/tab-controls.js';
tabControl();

import dropBtnFunc from './modules/nav-dropdown.js';
dropBtnFunc();

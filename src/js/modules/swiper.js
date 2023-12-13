import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc () {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 42,
		freeMode: true,
		navigation: {
			nextEl: '#slider-right',
			prevEl: '#slider-left',
		},
		breakpoints: {
			562: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
			1210: {
				slidesPerView: 4,
				spaceBetween: 42,
			}
		},
	});
}

export default swiperFunc;
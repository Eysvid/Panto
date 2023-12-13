function mobileNav() {
	const navBtn = document.querySelector('.menu-icon');
	const mobileMenu = document.querySelector('.mobile-nav');
	const mobileList = document.querySelectorAll('.mobile-nav__first-list li a');

	navBtn.onclick = function (e) {
		e.stopPropagation();
		navBtn.classList.toggle('menu-icon--active');
		mobileMenu.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	};

	mobileList.forEach (item => {
		item.addEventListener ('click', (e) => {
			mobileList.forEach (i => {
				i.classList.remove('active');
			})
			item.classList.add('active');
		})
	})

	document.addEventListener ('click', (e)=>{
		if (!e.target.closest('.mobile-nav')) {
		mobileMenu.classList.remove('mobile-nav--open');
		navBtn.classList.remove('menu-icon--active');
		}
	})
}

export default mobileNav;
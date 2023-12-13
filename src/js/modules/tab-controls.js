function tabControl() {
    const buttons  = document.querySelectorAll('.tab-controls__btn');
    const swipers = document.querySelectorAll('.swiper');

    buttons.forEach((btn, index) =>{
        btn.addEventListener('click', ()=>{
            buttons.forEach (button => {
                button.classList.remove('tab-controls__btn--active');
            })
            swipers.forEach (swiper =>{
                swiper.classList.add('none');
            })
            btn.classList.add('tab-controls__btn--active');
            swipers[index].classList.remove('none');
        })
    })
}

export default tabControl;
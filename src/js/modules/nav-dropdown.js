function dropBtnFunc () {
    const dropBtn = document.querySelector('.nav__item-btn');
    const dropList = document.querySelector('.dropdown')

    dropBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropList.classList.toggle('none');
        if (dropBtn.style.transform === 'rotate(180deg)') {
            dropBtn.style.transform = 'rotate(0deg)';
        } else {
            dropBtn.style.transform = 'rotate(180deg)';
        }
    })

    document.addEventListener('click', () => {
        dropList.classList.add('none');
        if (dropBtn.style.transform === 'rotate(180deg)') {
            dropBtn.style.transform = 'rotate(0deg)';
        }
    })
}

export default dropBtnFunc;
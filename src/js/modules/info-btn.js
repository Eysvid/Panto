function btnFunc() {
    const infoBtn = document.querySelectorAll('.info-btn');

    infoBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            
            e.stopPropagation();

            const infoHint = btn.parentElement.querySelector('.info-hint');
            const hintCircle = infoHint.querySelectorAll('.info-hint__circle');

            infoHint.classList.toggle('none');

            hintCircle.forEach(circle => {
                circle.addEventListener('click', (e) => {

                    e.stopPropagation();

                    hintCircle.forEach(item => {
                        item.classList.remove('info-hint__circle--checked');
                    })
                    circle.classList.toggle('info-hint__circle--checked');
                })
            })
        })
    })

    document.addEventListener('click', () => {
        infoBtn.forEach(btn => {
            btn.parentElement.querySelector('.info-hint').classList.add('none');
        })
    })
}

export default btnFunc;
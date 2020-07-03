var left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    slides = document.querySelector('.slide-content');

    right.addEventListener('click',function(){
        left.classList.add('active');
        right.classList.remove('active');

        slides.classList.add('translate');
    });
    left.addEventListener('click',function(){
        right.classList.add('active');
        left.classList.remove('active');

        slides.classList.remove('translate');
    });
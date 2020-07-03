document.addEventListener('DOMContentLoaded',function(){

    var button = document.querySelectorAll('.but-slides ul li'),
        slides = document.querySelectorAll('.slides ul li');
    for(var i=0;i<button.length;i++){
        button[i].addEventListener('click',function(){
            clearInterval(timing);
            for(var i =0;i<button.length;i++){
                button[i].classList.remove('active');
            }
            this.classList.add('active');

            var auto = 0;
            var active = this;
            for(auto ; active =active.previousElementSibling; auto++){}

            for(var i =0;i<slides.length;i++){
                slides[i].classList.remove('activee');
            }
            slides[auto].classList.add('activee');
        })
    }

    var timing = setInterval(function(){
        var active = document.querySelector('.activee');
        for(auto = 0;active = active.previousElementSibling;auto++){}
        if(auto < (slides.length-1)){
            for(var i =0;i<slides.length;i++){
                slides[i].classList.remove('activee');
                button[i].classList.remove('active');
            }
            slides[auto].nextElementSibling.classList.add('activee');
            button[auto].nextElementSibling.classList.add('active');
        }else{
            for(var i =0;i<slides.length;i++){
                slides[i].classList.remove('activee');
                button[i].classList.remove('active');
            }
            slides[0].classList.add('activee');
            button[0].classList.add('active');
        }
        
        
    },1000);
},false)
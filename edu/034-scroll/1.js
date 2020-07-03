document.addEventListener('DOMContentLoaded',function(){

    var status = 'tren300';
    var scrolldown = document.querySelector('.menu');
    window.addEventListener('scroll',function(){

        if(window.pageYOffset > 300){
            if(status == 'tren300'){
                
                scrolldown.classList.add('scroll300');

                status = 'duoi300';
            }
        }else{
            scrolldown.classList.remove('scroll300');
            status= 'tren300';
        }
    })
},false) 
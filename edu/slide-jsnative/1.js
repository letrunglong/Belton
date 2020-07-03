document.addEventListener('DOMContentLoaded',function(){

    var but = document.querySelectorAll('.but-slides ul li'),
        slides= document.querySelectorAll('.to .slides ul li');

    for(var i =0; i<but.length;i++){
    but[i].addEventListener('click',function(){
        clearInterval(timing);
        for(var i = 0; i<but.length;i++){
            but[i].classList.remove('active');
        }
         this.classList.add('active');

         var butAc = this;
        //click vào biết được vị trí 
        var index = 0;
        for(index =0 ; butAc = butAc.previousElementSibling; index++){}


         for(var i = 0;i<slides.length;i++){
            slides[i].classList.remove('activee');
            slides[index].classList.add('activee');
         }
         
    });
}
var timing = setInterval(function(){
    autoslides = document.querySelector('.activee');
    for(var auto =0; autoslides = autoslides.previousElementSibling; auto++){
    }
    if(auto < (slides.length-1)){
        for(var i = 0; i<slides.length;i++){
        slides[i].classList.remove('activee');
        but[i].classList.remove('active');
    }
    slides[auto].nextElementSibling.classList.add('activee');
    but[auto].nextElementSibling.classList.add('active');
    }else{
        for(var i = 0; i<slides.length;i++){
            slides[i].classList.remove('activee');
            but[i].classList.remove('active');
        }
        slides[0].classList.add('activee');
        but[0].classList.add('active');
    }
    
    
},3000);
    

},false)
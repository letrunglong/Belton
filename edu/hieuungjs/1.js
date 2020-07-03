 document.addEventListener('DOMContentLoaded',function(){

    var nut = document.querySelector('._button'),
    sideLeft = document.querySelectorAll('.menu-left'),
    bgr = document.querySelectorAll('.den');

        nut.onclick = function(){
            
            if(sideLeft[0].classList =='hidden' && bgr[0].classList =='_0den'){

                sideLeft[0].classList.add('hidden');
                bgr[0].classList.remove('_0den');
                
            }else{
                
                sideLeft[0].classList.toggle('hidden');            
                bgr[0].classList.toggle('_0den');
            }
            
        }
        bgr[0].onclick = function() {
            sideLeft[0].classList.add('hidden');
            bgr[0].classList.remove('_0den');
        }

 },false)
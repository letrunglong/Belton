document.addEventListener('DOMContentLoaded',function(){
    var menu1 = document.querySelector('.menu1'),
        right = document.querySelector('.right'),
    scrol = 'tren150',phai = 'giu',
    dilen = document.querySelector('.left-bot-3'),
    vitridilen = 'hien';


    console.log(right.offsetTop);
    window.addEventListener('scroll',function(){

        if(window.pageYOffset > 95){
            if(scrol == 'tren150'){
                menu1.classList.add('menufix');
                scrol = 'duoi150';
                
            }
            
        }else {
            if(scrol == 'duoi150'){
                menu1.classList.remove('menufix');
                scrol = 'tren150';
            }
            
        }
        if((window.pageYOffset > right.offsetTop) && (window.pageYOffset<= right.offsetTop+600)){
            if(phai =='giu'){
                right.classList.add('rightfix');
                phai = 'khonggiu';
            }
        }else{
            if(phai == 'khonggiu'){
                right.classList.remove('rightfix');
                phai='giu';
            }
        }
        if(window.pageYOffset > dilen.offsetTop-300){
            if(vitridilen == 'hien'){
                dilen.classList.add('animatescroll');
                vitridilen = 'an';
            }
        }else{
            if(vitridilen == 'an'){
                dilen.classList.remove('animatescroll');
                vitridilen = 'hien';
            }
        }
    })
},false)
 document.addEventListener('DOMContentLoaded',function(){

    var nut = document.querySelectorAll('.nut1');
        for(var i =0; i <nut.length ; i++){
            nut[i].onclick = function(){
            console.log(this.getAttribute('data-passWord'));
        }  
    }
 },false)
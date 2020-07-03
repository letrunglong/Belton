document.addEventListener('DOMContentLoaded', function(){
    var x = document.getElementById('but1');
    var a = document.querySelectorAll('#but2');
    var trangthai = '_1click';

    x.onclick = function(){ if(trangthai== '_1click'){
        a[0].classList.add(trangthai);
        trangthai = '_2click';
        a[0].classList.remove(trangthai);
    }
    else{
        
        a[0].classList.add(trangthai);
        trangthai= '_1click';
        a[0].classList.remove(trangthai);
    }}
   
},false)
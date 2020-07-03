 document.addEventListener('DOMContentLoaded',function(){
    var button = document.getElementById('btn-1');
    button.onclick = function(){
        contain = document.querySelectorAll('.card');
        contain[0].classList.toggle('cangiua');
    };


 },false)
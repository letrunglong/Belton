document.addEventListener('DOMContentLoaded', function(){

    var nut = document.querySelectorAll('.click');
    var nd = document.querySelectorAll('.hienthi');

    for(var i = 0; i < nut.length; i++){

        nut[i].onclick = function() {
        for(var k = 0; k < nut.length; k++){
            nut[k].classList.remove('trang');
        }
        this.classList.toggle('trang');

        var dat = this.getAttribute('data-users');
        var dat2 = document.getElementById(dat);
        for(var i = 0; i <nd.length; i++){
            nd[i].classList.remove('ra');
        }
        dat2.classList.toggle('ra');
    } }
    
},false)
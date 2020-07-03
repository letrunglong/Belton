document.addEventListener('DOMContentLoaded',function(){

    var tamgiac = document.querySelectorAll('.tamgiac');
    tamgiac = tamgiac[0];

    var noidung = document.querySelectorAll('.noidung');
    noidung= noidung[0];

    var so3 =document.querySelectorAll('.list-group');
    so3 = so3[0];

    tamgiac.onclick = function(){

        this.classList.toggle('trang');
        noidung.classList.toggle('hienxe');
        so3.classList.toggle('doimau');
    }

},false)
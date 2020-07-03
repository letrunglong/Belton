var img = document.querySelector('.img'),
    handsin = document.querySelector('.menu'),
    menubottom = document.querySelector('.menubottom'),
    nut = document.querySelector('.danhmuc'),
    trangthai = true;

    
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 300){
        img.classList.add('logo');
        handsin.classList.add('handsin');
    }else{
        img.classList.remove('logo');
        handsin.classList.remove('handsin');
    }
});

nut.addEventListener('click',function(){
    if(trangthai == true){
        menubottom.classList.add('visible');
        nut.innerHTML = 'Ẩn danh mục hàng';
        trangthai = false;
    }else{
        menubottom.classList.remove('visible');
        nut.innerHTML = 'Danh mục';
        trangthai = true;
    }
});
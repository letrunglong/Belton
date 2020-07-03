var button = document.querySelectorAll('.nut ul li'),
    ul = document.querySelector('.cha ul');
;

for(var i = 0; i <button.length;i++){
    button[i].addEventListener('click',function(){

        for(var i =0;i<button.length;i++){
            button[i].classList.remove('active');
        }
        this.classList.add('active');

        var active = document.querySelector('.active');
        for(var ix =0; active = active.previousElementSibling; ix++){

        }
        for(var i =0; i<button.length; i++){
            ul.classList.remove('so'+ i);
        }
        ul.classList.add('so'+ix);
        
    });
}

































// var button = document.querySelectorAll('.nut ul li'),
//     ul = document.querySelector('.cha ul');


// for (var i = 0; i < button.length; i++) {
//     button[i].addEventListener('click',function(){
//         for (var i = 0; i < button.length; i++) {
//             button[i].classList.remove('active');
//         }
//         this.classList.add('active');

//         var active = document.querySelector('.active');

//         for(var index = 0; active = active.previousElementSibling;index++){

//         }
//         for(var j =0; j <button.length;j++){
//             ul.classList.remove('so'+j);
//         }
//         ul.classList.add('so'+index);
//     })

    
// }
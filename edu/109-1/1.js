document.addEventListener('DOMContentLoaded',function(){
    var click = document.querySelectorAll('.click');
    var a = document.querySelectorAll('.hienthi');
    for(var i = 0; i <click.length; i++){
        click[i].onclick = function(){
            if(this.classList == 'trang'){

                this.classList.remove('trang');

                var biena =this.getAttribute('data-users');
                bienb = document.getElementById(biena);
                
                bienb.classList.remove('ra');
            }else{
                for(var j = 0; j <click.length; j++){
                    click[j].classList.remove('trang');
                }
                this.classList.toggle('trang');      
                
                var biena =this.getAttribute('data-users');
                bienb = document.getElementById(biena);
                for(var i = 0; i <a.length;i++){
                    a[i].classList.remove('ra');
                }
                bienb.classList.toggle('ra');
            }
            
        }
    }
},false)

    

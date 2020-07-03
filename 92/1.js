//  var x = document.querySelectorAll('.card .card-body');
// for (var i = 0; i < x.length; i++) {
// 	x[i].innerHTML = `<h4 class='card-title'>titleeee</h4
// 						<p class='card-text'>Textxxxx</p>`;
// }

document.addEventListener('DOMContentLoaded',function(){
	var nut = document.getElementById('btn-1');
	nut.onclick = function(){
		nut.classList.add('btn');
	}
},false)
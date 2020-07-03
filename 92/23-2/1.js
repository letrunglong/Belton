// var  x = "Viet";
// var  y = "31 tuổi ";

// console.log(" Xin chao " + x + " ! "
// 	+ "co phải anh " + y + " Hay không "
// 	);			
 

//  // demo ham tao va dinh phan tu trong javscript 
//  var phantu = document.createElement('h1');

//  // gan noi dung cho the do 
//  phantu.innerHTML="Day la noi dung ben trong"; // den day la co <h1> Day la noidung ben trong </h1>

// // lay phan tu can dat vao 
// var khoito = document.getElementById('caccm');

// // gan noi dung  vao
// khoito.appendChild(phantu);

// tao mang du lieu  ( bt la tu cs du lieu thong qua api )
var mangdl = [
	{
		id:1,
		anh:"http://kenh14cdn.com/zoom/280_175/2017/4-1503893387669-11-0-527-827-crop-1503895553509.jpg",
		ten:"Ho thi Thao",
		noidungcm:"Trước tình trạng hàng loạt chú chó ở khu Thảo Điền, quận 2, TP HCM nghi bị đầu độc hàng loạt, rất nhiều người nước"
	},
	{
		id:2,
		anh:"http://kenh14cdn.com/zoom/280_175/2017/20604698-1078700288932851-5716719696134699734-n-1503889939872-24-7-368-559-crop-1503889945580.jpg",
		ten:"Truong Qui Hai",
		noidungcm:"Vì sai sót, thiếu năng lực, phát ngôn ngông cuồng hay thậm chí là khi... không làm gì sai, 7 nghệ sĩ Hàn Quốc này đã "
	}

];




for (var i = 0; i < mangdl.length; i++) {
	var noidung1khoi = `
				<div class="kcm" id="kcm-${mangdl[i].id}">
 	 				<img src="${mangdl[i].anh}" alt="" class="float-xs-left pr-1" >
 	 				<b>${mangdl[i].ten}
 	 				</b> <span> ${mangdl[i].noidungcm}</span>

 	 			</div>`;
 	 console.log(noidung1khoi);					 
}


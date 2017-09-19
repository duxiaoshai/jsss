/*
* @Author: Administrator
* @Date:   2017-09-19 22:06:42
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 00:42:27
*/
window.onload=function(){
	let cedaohang = document.getElementsByClassName('cenav')[0];
	let lis = cedaohang.getElementsByTagName('li')
	let items = document.getElementsByClassName('item');
	for(let i=0; i<lis.length;i++){
		lis[i].onmousemove=function(){
			items[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			items[i].style.display='none';
			num=i;
		}
}
let yuandian = document.getElementsByClassName('yuandian')[0];
let dian = yuandian.getElementsByTagName('li')

let bnt = document.getElementsByClassName('banner')[0];
let imgs = bnt.getElementsByTagName('li')
let luobo = document.getElementsByClassName('lunbo')[0];

console.log(dian)
	for(let i = 0; i<dian.length; i++){
		dian[i].onclick=function(){
			for(let i=0; i<6;i++){
			dian[i].style.background='#17171c'
			imgs[i].style.display='none'
			

		}
		    num=i;
		    dian[num].style.background='#999'
			imgs[i].style.display='block'
			
	}
}
luobo.onmouseover=function(){
	clearInterval(t);
}
luobo.onmouseout=function(){
	t = setInterval(move,1000);
}


let t;
t = setInterval(move,1000);
let num = 0;
function move(){
	num++;
	if(num==imgs.length){
		num = 0;
	}
	for(let i=0; i<imgs.length;i++){
		imgs[i].style.display='none'
		dian[i].style.background='#17171c'

	}
	imgs[num].style.display='block'
	dian[num].style.background='#999'
}

function movel(){
	num--;
	if(num<0){
		num = imgs.length-1;
	}
	for(let i=0; i<imgs.length;i++){
		imgs[i].style.display='none'
		dian[i].style.background='#17171c'

	}
	imgs[num].style.display='block'
	dian[num].style.background='#999'
}
let zuo =document.getElementsByClassName('zuoleft')[0];
zuo.onclick=function(){
	movel();
}
let you =document.getElementsByClassName('youright')[0];
you.onclick=function(){
	move();
}
}
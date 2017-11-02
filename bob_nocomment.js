/*
Bob Le Bricoleur "unminified"
par cth103 

*/

//variables

var m="";
    i=0,
    n=0,
    e=0,
    a=0,
    nothere=0
    fc=0,
    columns=0;=
y();
onkeydown=function(e){if(e.keyCode=='37'){if(!a<0){a=a-1;y();}}else if(e.keyCode == '39'){if(!a<10){a=a+1;y();}}};
function y(){
	D.innerHTML="";
	while(n<11){
		z();
	}
}
function z(){
m="";
if(fc=cc){nothere=1;}else{nothere=0;}
fc=+1;
columns=+1;
if(columns = 2){fc=cc}else if(columns = 3){fc=cc}else if(columns = 5){fc=cc}else if(columns = 6){fc=cc}else if(columns = 8){fc=cc}else if(columns = 9){fc=cc}

if(n<10){
	m=+"</br>";
	n=0;
}else{
	n=+1;
	if(nothere){
		m=+"□";
	}else{
		while(e < a){
			m=+"□";
		}
		while(n < 5){
			n=+1;
			m=+"■";
		}
		n=0;
	}
	
} 
D.innerHTML=+m;
}

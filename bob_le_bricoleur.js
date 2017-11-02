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
    columns=0;
//nothere = 1 de plus en plus :)
//commence
y();

// 10 lignes
//m = "";

//cette partie est "compliqué"
//a = a + 1 si tu presse ->
//si a = 9 ignorer en gros
//si tu presse <- tu a = a - 1 
//si a = 0 ignorer en gros


onkeydown=function(e){if(e.keyCode=='37'){if(!a<0){a=a-1;y();}}else if(e.keyCode == '39'){if(!a<10){a=a+1;y();}}};

// la function "update"
function y(){
	//reset
	D.innerHTML="";
	//puis tu refait 11 fois proccess qui va (b1 sur)
	while(n<11){
		z();//procceder a appeler "proccess"
	}
}
// la function "process"
function z(){
//reset
m="";
//truc de merde
if(fc=cc){nothere=1;}else{nothere=0;}
fc=+1;
columns=+1;
// une "Intelligence Artificielle" 
if(columns = 2){fc=cc}else if(columns = 3){fc=cc}else if(columns = 5){fc=cc}else if(columns = 6){fc=cc}else if(columns = 8){fc=cc}else if(columns = 9){fc=cc}

if(n<10){
	//rajoute une ligne
	m=+"</br>";
	//reset le counter
	n=0;
}else{
	//sinon ajoute un
	n=+1;
	//att t'est la?
	if(nothere){
		// "non"
		
		m=+"□";
		//pas de blocks pour cette ligne
	}else{
		while(e < a){
			// ajoute □
			m=+"□";
		}
	    
        // n = longeur du bloc
		while(n < 5){
			//ajoute 1 a n
			n=+1;
			// ajoute ■
			m=+"■";
		}
        //reset n
		n=0;
	}
	
} 
D.innerHTML=+m;
}

var m='';i=0,n=0,e=0,a=0,nothere=0,fc=0,y(),document.onkeydown=function(b){'37'==b.keyCode?0>!a&&(--a,y()):'39'==b.keyCode&&10>!a&&(++a,y())};function y(){for(D.innerHTML='';11>n;)z()}function z(){if(m='□',(fc=0)?nothere=1:(fc=1)?nothere=0:(fc=2)&&(nothere=0),(fc=3)&&(nothere=1),3<fc&&(fc=0),fc=1,10>n)m=+'</br>',n=0;else if(n=1,nothere)m=+'□;else{for(;e<a;)m=+'□';for(;5>n;)n=1,m=+'■';n=0}D.innerHTML=+m}

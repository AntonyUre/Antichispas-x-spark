document.onselectstart=function(){return false};var nI=0;var kI=0;var run=false;function setOpacity(e,t){if(t<0)t=0;else if(t>100)t=100;if(e.filters)e.filters.alpha.opacity=t;else e.style.opacity=t/100}function TPR__(e){P1.style.left=50-2.5*e+"%";P1.style.width=2.5*e+"%";setOpacity(P1i,.5*e*e);if(e==20)run=false}function TPR_(e){P2.style.width=50-2.5*e+"%";setOpacity(P2i,100-.5*(e*e));if(e==20){P2i.src=IMGSRC[kI].src;setOpacity(P2i,100);P2.style.width="50%";for(var t=1;t<=20;t++)setTimeout("TPR__("+t+")",t*32)}}function TPR(){if(!run){run=true;P01i.src=IMGSRC[kI].src;P1.style.width=0;kI++;if(kI>=nI)kI=0;titLe(kI);P02i.src=IMGSRC[kI].src;P1i.src=IMGSRC[kI].src;for(var e=1;e<=20;e++)setTimeout("TPR_("+e+")",e*32)}else setTimeout("TPR()",100)}function TPL__(e){P2.style.width=2.5*e+"%";setOpacity(P2i,.5*e*e);if(e==20)run=false}function TPL_(e){P1.style.left=2.5*e+"%";P1.style.width=40+(10-2.5*e)+"%";setOpacity(P1i,100-.5*(e*e));if(e==20){P1i.src=IMGSRC[kI].src;setOpacity(P1i,100);P1.style.left=0;P1.style.width="50%";for(var t=1;t<=20;t++)setTimeout("TPL__("+t+")",t*32)}}function TPL(){if(!run){run=true;P02i.src=IMGSRC[kI].src;P2.style.width=0;kI--;if(kI<0)kI=nI-1;titLe(kI);P01i.src=IMGSRC[kI].src;P2i.src=IMGSRC[kI].src;for(var e=1;e<=20;e++)setTimeout("TPL_("+e+")",e*32)}else setTimeout("TPL()",100)}function titLe(e){document.getElementById("TXTBOX").innerHTML=IMGSRC[e].alt}onload=function(){IMGSRC=document.getElementById("imgsrc").getElementsByTagName("img");DB=document.getElementById("DHTMLBOOK");P01=DB.getElementsByTagName("span")[0];P01i=P01.getElementsByTagName("img")[0];P02=DB.getElementsByTagName("span")[1];P02i=P02.getElementsByTagName("img")[0];P1=DB.getElementsByTagName("span")[2];P1i=P1.getElementsByTagName("img")[0];P2=DB.getElementsByTagName("span")[3];P2i=P2.getElementsByTagName("img")[0];nI=IMGSRC.length;P1i.src=IMGSRC[kI].src;P2i.src=IMGSRC[kI].src;titLe(kI);DB.style.visibility="visible"};
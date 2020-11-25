var Plus_session=document.getElementById('Plus_session');
var Plus_break=document.getElementById('Plus_break');
var Minus_session=document.getElementById('Minus_session');
var Minus_break=document.getElementById('Minus_break');
var sess=document.getElementById('sess');
var Pause=document.getElementById('Pause');
var Reset=document.getElementById('Reset');
var disp=document.getElementById('disp');
var dispS=document.getElementById('countS');
var dispB=document.getElementById('countB');
var Sval=40;
var Bval=5;
var countMin=39;
var countSec=60;
dispS.innerHTML=Sval+' min';
dispB.innerHTML=Bval+' min';
var id=null;
function incrS(event){
    dispS.innerHTML=(Sval+1)+' min';
    Sval+=1;
}
function decrS(event){
    if(Sval!=0){
        dispS.innerHTML=(Sval-1)+' min';
        Sval-=1;
    }
}
function incrB(event){
    dispB.innerHTML=(Bval+1)+' min';
    Bval+=1;
}
function decrB(event){
    if(Bval!=0){
        dispB.innerHTML=(Bval-1)+' min';
        Bval-=1;
    }
}
function startBreak(){
    sess.innerHTML='Break';
    countMin=Bval-1;
    countSec=60;
    disp.style.color="orange";
    
    if(countMin>=0&&countSec>0)
        start();
}
function count(){
    if(countSec!=0){
        countSec-=1;
        if(countSec>0&&countSec<10){
        disp.innerHTML=countMin+':'+'0'+countSec;
        }
        else{
            disp.innerHTML=countMin+':'+countSec;
        }

    }else{
        if(countMin>0){
            countSec=59;
            countMin-=1;
            disp.innerHTML=countMin+':'+countSec;
        }else{
            clearInterval(id);
            startBreak();
        }
    }
}
function disable(mode){
    var butt=document.querySelectorAll('.butt');
    // console.log(butt);
    if(mode==1)
    butt.forEach((event)=>{event.disabled=true;});
    else{
            butt.forEach((event)=>{event.disabled=false;});
    }
}
function PauseF(event){
    // if(event.target.innerHTML!='Pause'){
        // start();
        // event.target.innerHTML='Pause';
    // }else{
    clearInterval(id);
    disable(0);
    // event.target.innerHTML='Resume';
    }
// }
function ResetF(event){
clearInterval(id);
disable(1);
// Pause.innerHTML='Pause';
disp.style.color="#00BDFE";
disp.innerHTML=Sval+':00';
countMin=Sval;
countSec=0;
start();
}
function start(){
    id=setInterval(count,1000);
}
Plus_session.addEventListener("click",incrS);
Plus_break.addEventListener("click",incrB);
Minus_session.addEventListener("click",decrS);
Minus_break.addEventListener("click",decrB);
Pause.addEventListener("click",PauseF);
Reset.addEventListener("click",ResetF);
start();
disable(1);
/**
 *! Un alert() espone 5 numeri generati casualmente.
 *!Da li parte un timer di 30 secondi.
 *!Dopo 30 secondi l'utente deve inserire, uno alla volta,
 *! i numeri che ha visto precedentemente, tramite il prompt().
 *!Dopo che sono stati inseriti i 5 numeri, il software 
 *!dice quanti e quali dei numeri da indovinare sono stati 
 *!individuati.
 */
let numeri = [];
let contatore=0;
for (let i = 0; i <5;i++){
    let num=0;
    do{
        num=Math.floor(Math.random()*100)+1;
    }while(numeri.includes(num))
    numeri.push(num);
}

document.getElementById("prendi").addEventListener("click",prendidati);


/*
alert(numeri);
setTimeout(quant,3000);
*/

setTimeout(start,2000);


function prendidati(){
    let num=document.getElementById('input').getElementsByClassName("numero");
    let ci_sono=[];
    let contatore=0;
    for(let i=0;i<num.length;i++){
        if(numeri.includes(parseInt(num[i].value))){
            contatore++;
            ci_sono.push(parseInt(num[i].value));
        }
    }
    if(contatore>=3){
        document.getElementById("message").innerHTML="<h1>bravo <br>hai indovinato <br>"+contatore+"<br>"+ci_sono+" </h1>";
    }else{
        document.getElementById("message").innerHTML="<h1>o no hai <br>indovinato solo<br>"+contatore+"<br>"+ci_sono+" </h1>";
    }
    document.getElementById("input").classList+= " d-none";
}

function start(){
    document.getElementById("container").classList.remove("arale_arriva");
    document.getElementById("container").classList+=" arale_gioca";
    document.getElementById("message").innerHTML="<h1>ora giochiamo<br> a simon dice </h1>";
    setTimeout(function(){
        document.getElementById("message").innerHTML="<h2>ora ti daro dei numeri<br> dopo 30 secondi<br> te gli richiedero </h2>";
    },1000)
    setTimeout(function(){
        document.getElementById("message").innerHTML="<h1>"+numeri+ "</h1>";
        setTimeout(quant,30000);
    },3000);
}



function quant(){
    document.getElementById("message").innerHTML="<h1>che numeri erano</h1>";
    document.getElementById("input").classList.remove("d-none");
   /* for(let i=0;i<5;i++){
        let num=prompt("quale numero hai visto?");
        if(numeri.includes(num)){
            contatore++;
            ci_sono.push(num);
        }
    }*/
}
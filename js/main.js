/**
 *! Un alert() espone 5 numeri generati casualmente.
 *!Da li parte un timer di 30 secondi.
 *!Dopo 30 secondi l'utente deve inserire, uno alla volta,
 *! i numeri che ha visto precedentemente, tramite il prompt().
 *!Dopo che sono stati inseriti i 5 numeri, il software 
 *!dice quanti e quali dei numeri da indovinare sono stati 
 *!individuati.
 */

window.addEventListener("load", initAudioPlayer);
let numeri = [];
let contatore=0;
let audio;
let numero=5;


document.getElementById("prendi").addEventListener("click",prendidati);


/*
alert(numeri);
setTimeout(quant,3000);
*/

setTimeout(start,2000);

function initAudioPlayer(){
    audio = new Audio();
    audio.src = "./music/Dr. Slump Arale - Opening - Japanese- Arele Norimaki.mp3";
    audio.loop = true;
    audio.volume = 0.05;
    audio.play();
}
//non funziona su chrome hanno una politica che inpedisce autoplay
function prendidati(){
    let num=document.getElementById('input').getElementsByClassName("numero");
    let ci_sono=[];
    let contatore=0;
    for(let i=0;i<num.length;i++){
        if(!(ci_sono.includes(parseInt(num[i].value)))){
            if(numeri.includes(parseInt(num[i].value))){
                contatore++;
                ci_sono.push(parseInt(num[i].value));
            }
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
    numeri_casuali(numero);
    document.getElementById("container").classList.remove("arale_arriva");
    document.getElementById("container").classList+=" arale_gioca";
    document.getElementById("message").innerHTML="<h1>ora giochiamo<br> a simon dice </h1>";
    setTimeout(function(){
        document.getElementById("message").innerHTML="<h2>ora ti daro dei numeri<br> dopo 30 secondi<br> te gli richiedero </h2>";
        setTimeout(function(){
            document.getElementById("message").innerHTML="<h1>"+numeri+ "</h1>";
            setTimeout(quant,5000);
        },3000);
    },1000)
    
}

function numeri_casuali(y){
    numeri=[]
    while (numeri.length<y){
        let num=Math.floor(Math.random()*100)+1;
        if(!(numeri.includes(num)))
            numeri.push(num);
    }
}

function quant(){
    document.getElementById("message").innerHTML="<h1>che numeri erano</h1>";
    document.getElementById("input").classList.remove("d-none");
}
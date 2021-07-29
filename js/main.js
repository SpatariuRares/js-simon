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

alert(numeri);
setTimeout(quant,3000);


function quant(){
    for(let i=0;i<5;i++){
        let num=prompt("quale numero hai visto?");
        if(numeri.includes(num)){
            contatore++;
        }
    }
    console.log(contatore);
}
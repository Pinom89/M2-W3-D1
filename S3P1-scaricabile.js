/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso
 allora deve ritornare la loro somma moltiplicata per 3.
*/


let n1 = prompt("inserisci numero intero")
let n2 = prompt("inserisci 2 numero intero")

n1 = parseInt(n1);
n2 = parseInt(n2);

function crazySum (num1, num2) {
    if (num1 == num2) {  // verifico che i due numeri siamo uguali
        return (num1 + num2)*3 
    } else {
        return num1 + num2 
    }

}
console.log(crazySum(n1,n2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) 
 o se è esattamente uguale a 400.
*/

 let z = 50;

 function boundary (n) {
    if (n>=20 && n<=100 || n === 400){  // inserisco 3 condizioni al fine di avere un riscontro di un valore booleano
    return n = true
    } else {
    return n = false
    }
 }

console.log (boundary (z))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let array = ["e", "P", "i", "c", "o", "d", "e"] // creo array 

function reverseString (a){
    return a.reverse(); //utilizzo . reverse per invertire l'ordine dell'array
}

console.log(reverseString(array))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro 
 e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

nome = "giuseppe"

function upperFirst(o) {
    return o.charAt(0).toUpperCase() + o.slice(1,100);

}

console.log(upperFirst(nome))


function upperFirstMaConLaFrase(stringa) {
    let words = stringa.split(" ");
    let finalString = [];
    for (let i=0; i < words.length; i++) {
        let firstChar = words[i].charAt(0);
        let upperCaseChar = firstChar.toUpperCase();
        let cuttedString = words[i].slice(1);
        let finalWord = upperCaseChar + cuttedString;
        finalString.push(finalWord);
    }
    console.log(finalString.join(" "))

}
upperFirstMaConLaFrase ("ciao mondo")



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e 
 ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// versione 1 
function giveMeRandom (n){
    let numeriRandom = [];
    for (let i = 0; i <= n; i++)
     {
        let numeroCasuale = Math.floor(Math.random()*11)
        numeriRandom.push(numeroCasuale)
     }
    return  numeriRandom
} 
console.table(giveMeRandom (5));  //versione 1

// versione 2 
function giveMeRandom2 (n){
    const numeriRandom2 = [];
    for (let i = 0; i <= n; i++)
     {
        numeriRandom2.push(Math.floor(Math.random()*11))  // effettuo un pus direttamente nella costante 
     }
    return  numeriRandom2
} 

console.table(giveMeRandom2 (10)); //versione 2 




/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
let l1 = 4;
let l2 = 4;

function area (a, b){
  return a * b
}

console.log ("l'area del quadrato è" + " " + area(l1,l2));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

// versione senza differenza assoluta
const number = 19;
function crazyDiff (a){
  if (a>number){
    return (a - number) * 3;
  } else {
    return (a - number)
  }

}

console.log(crazyDiff(5))

// versione con differenza assoluta
function crazyDiff2 (numero) {
    let differenzaAssoluta =  Math.abs(numero - 19);
    // se la variabile "Differenza Assoluta" > 19
    if (differenzaAssoluta> 19) {
        return differenzaAssoluta * 3;
    } else {
        return differenzaAssoluta; 
    }
}

console.log(crazyDiff2 (3))



/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(stringa) {
    if(stringa.startsWith("code")) {
        return stringa;
    } else {
         return "code" + stringa;

    }
}
console.log(codify("ciaomondo"));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

let test = prompt("inserisci numero positivo");

let parstest = parseInt(test);

let alfa = 24
function check3and7(n) {
    console.log(n)
  if (n>0) { 
    console.log(n);
    if (n % 3== 0 || n % 7 == 0) {
    return true
  } else {
    return false
  }
} else {
    console.log(n)
;    return alert("il numero non è positivo: impossibile eseguire il calcolo"), false; 

}
}

console.log(check3and7(parstest))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

let x = "ciao mamma";

function cutString (y) {
  if (typeof y === "string" && y.length>=2) {
        let newY = y.slice(1,y.length -1)
        return newY
  } else {
    return "questa non è una stringa inserisci dei caratteri alfanumerici"
  }

}

console.log(cutString(x))
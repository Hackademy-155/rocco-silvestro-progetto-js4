// esercizio1

function calcolaArray(a, b, operazione) {
    let c = [];

    for (let i = 0; i < a.length; i++) {
        switch (operazione) {
            case 'addizione':
                c.push(a[i] + b[i]);
                break;
            case 'sottrazione':
                c.push(a[i] - b[i]);
                break;
            case 'moltiplicazione':
                c.push(a[i] * b[i]);
                break;
            case 'divisione':
                
                c.push(b[i] !== 0 ? a[i] / b[i] : 0);
                break;
            default:
                console.log('Operazione non valida');
                return null;
        }
    }

    return c;
}


function generaArrayCasuale() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 10) + 1); 
    }
    return array;
}

// Esempio di utilizzo
let a = generaArrayCasuale();
let b = generaArrayCasuale();
let operazione = 'divisione'; 

let risultato = calcolaArray(a, b, operazione);
console.log(`Array A: ${a}`);
console.log(`Array B: ${b}`);
console.log(`Operazione: ${operazione}`);






// esercizio2


// let a =[3,5,10,2,8]

// let somma = a.reduce((acc, val) => acc + val, 0);
// let media = somma/ a.length;

// let minori = a.filter(val => val <media);
// let maggiori = a.filter(val => val > media);

// console.log(`media = ${media}`);
// console.log(`valore minore = ${minori}`);
// console.log(`conteggio valore minore = ${minori.length}`);
// console.log(`conteggio valori maggiori = ${maggiori.length}`);




// Esercizio3
// let numeri = [10,20,30,40];

// let reduced = numeri.reduce((tot,el) =>  {
//     tot = tot + el
//     return tot
// })

// conso,le.log(numeri);
// console.log(reduced);


// esercizio4

// let parole = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'];

// let lettere = parole.filter(item => typeof item === `string`)

// console.log(lettere);
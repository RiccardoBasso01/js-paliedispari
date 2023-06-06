console.log('JS pari-dispari OK');

// Recupero elemento dal DOM
const evenOdd = document.getElementById('even-odd');
const userNumber = document.getElementById('user-number');
const pcNumber = document.getElementById('pc-number');
const result = document.getElementById('result');
const play = document.getElementById('play');


//Al click del bottone
play.addEventListener('click', function(){  
   // Recupero la scelta fatta dall' utente
    let choice;
    if(evenOdd.value === 'even'){
        choice = 'even';
    }else if(evenOdd.value === 'odd'){
        choice = 'odd';
    }else{
        return
    }
    console.log('pari o dispari: ', choice);

    // Recupero numero inserito dall' utente e verifico che sia un numero compreso tra 1 e 5
   const userNumberInput = parseInt(userNumber.value)
   console.log('Numero scelto: ', userNumberInput);
   if(isNaN(userNumberInput) || userNumberInput > 5 || userNumberInput < 1) return;

    // Genero un numero random da 1 a 5 e lo inserisco nel DOM
    const pcRandom = Math.floor((Math.random() * 5) + 1);
    console.log('Numero del pc: ',pcRandom);
    pcNumber.innerText = pcRandom;

    //! Con la funzione
    const evenOddResult = isEven(userNumberInput, pcRandom);

    result.innerText = evenOddResult === choice ? 'HAI VINTO!' : 'HAI PERSO!';

    //! Senza la funzione
    // // Sommo i due numeri
    // const sum = userNumberInput + pcRandom;
    // console.log('Somma dei due numeri: ',sum);
    
    // // Stabilisco se la somma è pari o dispari
    // let evenOddResult = !(sum % 2) ? 'even' : 'odd';

    // // Confronto la scelta con il risultato
    // result.innerText = evenOddResult === choice ? 'HAI VINTO!' : 'HAI PERSO!';

    // Aggiunta classi al risulato
    if(evenOddResult === choice){
        result.classList.add('winner');
        result.classList.remove('loser');
    }else{
        result.classList.add('loser');
        result.classList.remove('winner');
    }
});


// Funzione per verificare se la somma di due numeri è pari o dispari
function isEven(x, y){
    x = parseInt(x);
    y = parseInt(y);
    const sum = x + y;

    console.log('Somma dei due numeri: ',sum)

    const isEven = !(sum % 2) ? 'even' : 'odd'; 
    return isEven;
}
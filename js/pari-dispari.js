// console.log('JS pari-dispari OK');

// // Recupero elemento dal DOM
// let userNumber = document.getElementById('user-number');
// let pcNumber = document.getElementById('pc-number');
// const rollDice = document.getElementById('pari-dispari');
// const result = document.getElementById('result')
// //Facce dei dadi
// const userDice = document.getElementById('user-dice');
// const pcDice = document.getElementById('pc-dice');

// //Al click del bottone
// rollDice.addEventListener('click', function(){
   
//     // Genero due numeri random da 1 a 6
//    const userRandom = Math.floor((Math.random() * 6) + 1)
//    const pcRandom = Math.floor((Math.random() * 6) + 1)
//     console.log(userRandom, pcRandom)
//     //Inserisco i numeri nel DOM
//     userNumber.innerText = userRandom;
//     pcNumber.innerText = pcRandom;
    
//     //Controllo il vincitore
//     let resultText = 'Hai perso!';
//     result.className = 'card-subtitles ' + 'loser'
//     if(userRandom > pcRandom){
//         resultText = 'Hai vinto!';
//         result.className = 'card-subtitles ' + 'winner'
//     }else if(userRandom === pcRandom){
//         resultText = 'Pareggio'
//         result.className = 'card-subtitles ' + 'balance'
//     }

//     result.innerText = resultText
    
//     //Visualizzo le facce dei dadi
//     userDice.innerHTML = `<img src="img/${userRandom}.png" width="40">`
//     pcDice.innerHTML = `<img src="img/${pcRandom}.png" width="40">`

// });

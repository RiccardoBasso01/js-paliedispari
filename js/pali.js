console.log('JS pali OK');

// Recupero elemento dal DOM
const wordInput = document.getElementById('word-input');
const enterWord = document.getElementById('enter-word');
const paliResult = document.getElementById('pali-result');


// Creare una funzione che verifichi se è palindroma
function isPalindroma(word){
    // Partendo dall' ultima lettera ricompongo le parole al contrario
    let reverse = '';
    for(let i = word.length; i >= 0; i--){
        reverse += word.charAt(i);
    }
    
    // Restituisco un valore booleano vero se le parole al contrario sono uguali, altrimenti falso
    const isPali = (reverse === word) ? true : false;
    
    console.log('Parola/e al contrario :', reverse)
    console.log('Parola/e inserita :', word)
    
    return isPali;
}


enterWord.addEventListener('click', function(){
    // Parola inserita con lowerCase e trim per evitare errori
    let wordValue = wordInput.value.toLowerCase().trim()
    // Divido le parole inserite in un array per poi riunirle tutte attaccate, in questo modo si eliminano gli spazi rendendo valido l' esercizio anch eper le frasi
    wordValue = wordValue.split(' ').join('');
    
    const result = isPalindroma(wordValue);
    
    paliResult.innerText = result ? 'È PALINDROMA' : 'NON È PALINDROMA';
    
    console.log(result)

    // Aggiunta classi al risultato
    if(result){
        paliResult.classList.add('true');
        paliResult.classList.remove('false');
    }else{
        paliResult.classList.add('false');
        paliResult.classList.remove('true');
    }

})
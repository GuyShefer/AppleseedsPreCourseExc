(function () {
    let readlineSync = require('readline-sync');

    /*
    * in this program i tried to use map or object to storage the letters with their values of the hidden word.
    * but i found that its not possibole, you cant add the same key with another value to the data structure.
    * so i used 2 arrays, one for the random word and the second for the hidden word that revealed in each of the correct guesses.
    */

    let amountOfGuesses = 10;
    let wordsArr = ['watermelon', 'orange', 'apple', 'grapes', 'mango', 'papaya', 'strawberries', 'kiwi'];
    let rndWord = getRndWord(wordsArr);

    let lettersArr = rndWord.split('');
    let hiddenWordArr = Array(lettersArr.length).fill('*');

    let userGuessTheWord = false;

    while (amountOfGuesses > 0 && !userGuessTheWord) {

        console.log('Remaining attempts : ' + amountOfGuesses);
        console.log('The word to guess : ' + hiddenWordArr.join(''));

        if(amountOfGuesses < 6 && readlineSync.keyInYN('Do you want to guess the full word?')){
            getUserFullWordGuess = getFullWordGuessFromTheUser();
            userGuessTheWord = checkWordsMatch(rndWord, getUserFullWordGuess);
            if(userGuessTheWord){
                break;
            }
        }
        
        let userGuess = getGuessFromTheUser();

        if (lettersArr.includes(userGuess)) {
            console.log('Nice hit!!!');
            replaceAsterisksInTheHiddenWord(userGuess);
            userGuessTheWord = checkWordsMatch(rndWord, hiddenWordArr.join(''));
        } else {
            console.log('The character does not match...');
            --amountOfGuesses;
        }
        console.log(' ');
    }

    if(userGuessTheWord) {
        console.log(`Excellent! you did it, the word was : ${rndWord}`)
    } else {
        console.log(`Game over! the word was : ${rndWord}, maybe next time!`)
    }

    
    function getFullWordGuessFromTheUser() {
        let guess = readlineSync.question('Please enter your full word guess :');
        if(guess.length < 0 || !isNaN(guess) || isSymbol(guess)) {
            throw "stop execution";
        }
        return guess;
    }

    function checkWordsMatch(firstWord, secondWord) {
        if (firstWord === secondWord) {
            return true;
        } else {
            return false;
        }
    }

    function replaceAsterisksInTheHiddenWord(guess) {
        for (let i = 0; i < lettersArr.length; i++) {
            if (lettersArr[i] === guess) {
                hiddenWordArr[i] = lettersArr[i];
            }
        }
    }

    function getGuessFromTheUser() {
        let guess = readlineSync.question('Please enter your guess :');
        let validGuess = validateTheGuess(guess);
        while (!validGuess) {
            guess = readlineSync.question('Please enter your guess :');
            validGuess = validateTheGuess(guess);
        }
        return guess.toLowerCase();
    }

    function validateTheGuess(guess) {
        if (guess.length === 0) {
            console.log('Your input is invalid, the guess can not be empty');
            return false;
        }
        else if (guess.length > 1) {
            console.log('Your input is invalid, the guess must be only one character');
            return false;
        }
        else if (!isNaN(guess)) {
            console.log('Your input is invalid, the guess can not be a number');
            return false;
        }
        else if (isSymbol(guess)) {
            console.log('Your input is invalid, the guess can not be a symbol');
            return false;
        }
        else {
            return true;
        }
    }

    function isSymbol(str) {
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return format.test(str);
    }

    function getRndWord(arr) {
        if (arr.length === 0) {
            throw "stop execution";
        }
        let rndNum = Math.floor(Math.random() * arr.length);
        return arr[rndNum];
    }

})();

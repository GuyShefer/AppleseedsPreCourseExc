(function () {

    let readlineSync = require('readline-sync');

    let inputStr = getUserInput();

    console.log(findTheLongestWord(inputStr));

    function findTheLongestWord(str) {
        let stringArr = str.split(/(?<Alpha>[a-zA-Z]*)(?<Numeric>[0-9]*)/);
        let longestWord = '';
        for (let i = 0; i < stringArr.length; i++) {
            if (isNaN(Number(stringArr[i])) && !isSymbol(stringArr[i])) {
                if (longestWord.length < (stringArr[i]).length) {
                    longestWord = stringArr[i];
                }
            }
        }

        if (longestWord.length === 0) {
            return 'Your sentence does not contains words';
        } else {
            return longestWord;
        }

    }

    
function isSymbol(str) {
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return format.test(str);
    }
    function getUserInput() {
        let inputStr = readlineSync.question('Please enter your sentence :');
        if (inputStr.length === 0) {
            throw "stop execution";
        }
        return inputStr;
    }

})();
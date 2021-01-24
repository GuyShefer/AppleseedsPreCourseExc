(function () {

    let readlineSync = require('readline-sync');

    let inputStr = getUserInput();

    console.log(capitalizeVowel(inputStr));

    function capitalizeVowel(str) {
        let stringArr = str.split('');
        let vowelLetters = ['a', 'e', 'i', 'o', 'u', 'y'];

        for (let i = 0; i < stringArr.length; i++) {
            for (let j = 0; j < vowelLetters.length; j++) {
                if (stringArr[i] === vowelLetters[j]) {
                    stringArr[i] = (stringArr[i]).toUpperCase();
                    break;
                }
            }
        }
        return stringArr.join('');
    }

    function getUserInput() {
        let inputStr = readlineSync.question('Please enter your sentence :');
        if (inputStr.length === 0) {
            throw "stop execution";
        }
        return inputStr;
    }

})();
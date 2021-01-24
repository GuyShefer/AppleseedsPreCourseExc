(function () {

    let readlineSync = require('readline-sync');

    let inputStr = getUserInput();

    if (isPalindrome(inputStr)) {
        console.log('Nice, That is a palindrome!');
    } else {
        console.log('Sorry, that is not a palindrome')
    }

    function isPalindrome(str) {
        let tempStr = str;
        let reverseStr = str.split('').reverse().join('');
        if (tempStr === reverseStr) {
            return true;
        } else {
            return false;
        }
    }

    function getUserInput() {
        let inputStr = readlineSync.question('Please enter a palindrome :');
        if (inputStr.length === 0) {
            throw "stop execution";
        }
        return inputStr;
    }

})();
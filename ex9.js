(function () {

    let readlineSync = require('readline-sync');

    let num = getUserInput();

    for (let i = 2; i <= num; i++) {
        if (isPrimeNum(i)) {
            console.log(i)
        }
    }

    function isPrimeNum(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    function getUserInput() {
        let num = Number(readlineSync.question('Please choose a number that greater than 1 :'));
        if (isNaN(num) || num < 1) {
            throw "stop execution";
        } else {
            return num;
        }
    }

})();
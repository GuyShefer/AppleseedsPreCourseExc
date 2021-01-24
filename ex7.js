(function () {

    let readlineSync = require('readline-sync');
    let num = getUserInput();

    while (num < 1 || num % 1 !== 0) {
        console.log('Try again!')
        num = getUserInput();
    }

    let factorial = calcFactorial(num);
    console.log(`The factorial for ${num} is ${factorial}`);

    function calcFactorial(num) {
        let factorial = 1;
        for (i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    function getUserInput() {
        let num = Number(readlineSync.question('Please enter a positive integer :'));
        if (isNaN(num)) {
            throw "stop execution";
        } else {
            return num;
        }
    }

})();
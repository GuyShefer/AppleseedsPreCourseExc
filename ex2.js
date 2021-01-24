(function () {

    let readlineSync = require('readline-sync');

    let firstNum = Number(readlineSync.question('Please enter your first number :'));
    let secondNum = Number(readlineSync.question('Please enter your second number :'));

    if (isNaN(firstNum) || isNaN(secondNum)) {
        console.log("nope");
    } else {
        let result = parseFloat(firstNum) + parseFloat(secondNum);
        result === 10 ? console.log("makes 10") : console.log("nope");
    }
})();
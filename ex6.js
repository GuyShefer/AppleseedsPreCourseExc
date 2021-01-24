(function () {

    let readlineSync = require('readline-sync');

    let num = getUserInput();

    while (num <= 10) {
        num = getUserInput();
    }

    console.log('Thank you');

    function getUserInput() {
        let num = Number(readlineSync.question('Please choose a number larger than 10 :'));
        if (isNaN(num)) {
            throw "stop execution";
        } else {
            return num;
        }
    }
})();
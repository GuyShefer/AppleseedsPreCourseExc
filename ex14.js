(function () {

    let readlineSync = require('readline-sync');

    let num = getUserInput();

    let arr = createArrWithRndValues(num);
    arr.sort(function (a, b) { return a - b });
    console.log("The minimum number in the array is : " + arr[0]);
    console.log("The maximum number in the array is : " + arr[num-1]);

    function createArrWithRndValues(num) {
        let arr = new Array(num);
        for (let i = 0; i < num; i++) {
            arr[i] = createRandomNumber();
        }
        return arr;
    }

    function createRandomNumber() {
        return Math.floor(Math.random() * 50 + 1);
    }

    function getUserInput() {
        let num = Number(readlineSync.question('Please enter a positive integer number :'));
        if (isNaN(num) || num < 1 || num % 1 !== 0) {
            throw "stop execution";
        } else {
            return num;
        }
    }

})();
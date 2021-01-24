(function () {

    let readlineSync = require('readline-sync');

    let intArrLength = getArrLength();
    let intArr = new Array(intArrLength);

    fillArrWithElemnts(intArr);
    console.log(intArr);
    intArr = intArr.reverse();
    console.log(intArr);

    function fillArrWithElemnts(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = requestIntElementFromTheUser();
        }
    }

    function requestIntElementFromTheUser() {
        let element = Number(readlineSync.question("Please enter a positive integer to create new element: "));
        validatePositiveInt(element);
        return element;
    }

    function getArrLength() {
        let length = Number(readlineSync.question('Please enter a positive integer for the array size : '));
        validatePositiveInt(length);
        return length;
    }

    function validatePositiveInt(num) {
        if (isNaN(num) || num < 1 || num % 1 !== 0) {
            throw "stop execution";
        }
    }

})();
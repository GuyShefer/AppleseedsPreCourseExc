(function () {

    let readlineSync = require('readline-sync');

    let firstArrLength = getArrLength('first');
    let secondArrLength = getArrLength('second');

    let firstArr = new Array(firstArrLength);
    let secondArr = new Array(secondArrLength);

    console.log("Let's add new elements to the first array :");
    fillArrWithElemnts(firstArr);
    console.log("Now let's add new elements to the second array :");
    fillArrWithElemnts(secondArr);

    let mergeArr = [...firstArr, ...secondArr];
    console.log(mergeArr);


    function fillArrWithElemnts(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = requestElementFromTheUser();
        }
    }

    function requestElementFromTheUser() {
        let element = readlineSync.question('Please enter a new element to the array : ');
        return element;
    }

    function getArrLength(arrName) {
        let length = Number(readlineSync.question(`Please enter a positive integer number for the size of the "${arrName}" array :`));
        if (isNaN(length) || length < 1 || length % 1 !== 0) {
            throw "stop execution";
        } else {
            return length;
        }
    }

})();
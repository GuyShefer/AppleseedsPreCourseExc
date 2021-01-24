(function () {

    let readlineSync = require('readline-sync');
    let stringArr = (getUserInput()).split('');

    for (let i = 0; i < stringArr.length; i++) {
        if(stringArr[i] === ' '){
            stringArr[i] = '*';
        }
    }

    let asterisksStr = stringArr.join('');

    console.log(asterisksStr);

    function getUserInput() {
        let inputStr = readlineSync.question('Please enter your sentence :');
        if (inputStr.length === 0) {
            throw "stop execution";
        }
        return inputStr;
    }

})();
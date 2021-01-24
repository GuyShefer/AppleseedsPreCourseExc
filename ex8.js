(function () {

    for (let i = 0; i <= 100; i++) {
        if (isTheNumdivisibleBySeven(i) || isSevenExistInTheNum(i)) {
            console.log('BOOM');
        } else {
            console.log(i + ',');
        }
    }

    function isTheNumdivisibleBySeven(num) {
        if(num === 0){
            return false;
        }
        else if (num % 7 === 0) {
            return true;
        } else {
            return false;
        }
    }

    function isSevenExistInTheNum(num) {
        let digit = num % 10;
        if (digit === 7) {
            return true;
        } else {
            digit = Math.floor(num / 10);
            if (digit === 7) {
                return true;
            } else {
                return false;
            }
        }
    }


})();
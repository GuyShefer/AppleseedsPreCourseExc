(function () {

    let readlineSync = require('readline-sync');

    let amountOfPeople = Number(readlineSync.question('How many people are you going with? :'));

    let regularResturants = ['Dabush Shawarma', 'Moses Burger', 'Jasmino Kebab'];
    let kosherResturants = ['Ahla Resturant', 'Bat-Haikar Restaurant', 'Yaffo-Tel Aviv Resturant'];
    let KashrutLemehadrinResturants = ['Regina Resturant', 'Armando Resturant', 'Bahadunes Hummus'];

    if (amountOfPeople % 1 !== 0 || amountOfPeople < 0) {
        throw "stop execution";
    }

    if (isNaN(amountOfPeople)) {
        throw "stop execution";
    }

    if (readlineSync.keyInYN('Should it be Kosher?')) {
        if (readlineSync.keyInYN('Should it be Kashrut Lemehadrin?')) {
            selectResturant(KashrutLemehadrinResturants);
        } else {
            selectResturant(kosherResturants);
        }
    } else {
        selectResturant(regularResturants);
    }


    function selectResturant(resturants) {
        index = readlineSync.keyInSelect(resturants, 'What kind of food do you want?');
        if (index === -1) {
            console.log("Ok GoodBye!");
        } else {
            console.log('So you choose ' + resturants[index] + ', a good choice!')
        }
    }

})();
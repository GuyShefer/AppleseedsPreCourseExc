(function () {
    
    let readlineSync = require('readline-sync');
    
    let num = parseInt(readlineSync.question('Please enter a number between 0-9 :'));
    
    switch (num) {

        case 0:
            console.log('ZERO');
            break;
        case 1:
            console.log('ONE');
            break;
        case 2:
            console.log('TWO');
            break;
        case 3:
            console.log('THREE');
            break;
        case 4:
            console.log('FOUR');
            break;
        case 5:
            console.log('FIVE');
            break;
        case 6:
            console.log('SIX');
            break;
        case 7:
            console.log('SEVEN');
            break;
        case 8:
            console.log('EIGHT');
            break;
        case 9:
            console.log('NINE');
            break;
        default:
            console.log('You should have entered a number between 0-9 !')
    }
    
    })();
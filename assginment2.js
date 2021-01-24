(function () {

    let readlineSync = require('readline-sync');

    console.log(`
        oooooo oooooo oooooo oooooo oooooo oooooo oooooo
        oooooo oooooo WELCOME TO CARDS WAR oooooo oooooo 
        oooooo oooooo oooooo oooooo oooooo oooooo oooooo
    `);

    let firstPlayerName = getUserName('first player');
    let firstPlayer = new Player(firstPlayerName);
    printHello(firstPlayer.playerName);

    let isplayingAgainst2ndPlayer = readlineSync.keyInYN('Do you want to add second player?');
    let secondPlayer;

    if (isplayingAgainst2ndPlayer) {
        let secondPlayerName = getUserName('second player');
        secondPlayer = new Player(secondPlayerName);
        printHello(secondPlayer.playerName);
    }

    let isMoneyLeft = checkIfThereIsMoneyLeft();

    while (isMoneyLeft) {
        let firstPlayerBet;
        let secondPlayerBet;

        if (isplayingAgainst2ndPlayer) {
            firstPlayerBet = askForValidBetFromThePlayer(firstPlayer);
            secondPlayerBet = askForValidBetFromThePlayer(secondPlayer);
        } else {
            firstPlayerBet = askForValidBetFromThePlayer(firstPlayer);
        }
        let result = 'draw';

        while (result === 'draw') {
            firstPlayerCard = getRandomCard();
            secondPlayerCard = getRandomCard();
            printCardsResult(firstPlayerCard, secondPlayerCard);
            result = calcWhoWon(firstPlayerCard, secondPlayerCard);
            if (result === 'draw') {
                console.log('no one won this round, lets try again :')
            }
        }

        printTheWinnerAndUpdateAmounts(firstPlayerBet, secondPlayerBet, result);

        isMoneyLeft = checkIfThereIsMoneyLeft();

        if (isMoneyLeft) {
            if (!readlineSync.keyInYN('Do you want to continue playing another round?')) {
                break;
            }
        } else {
            break;
        }

    }

    console.log('Thanks for playing see you next time! :)');

    function printTheWinnerAndUpdateAmounts(firstPlayerBet, secondPlayerBet, result) {
        if (isplayingAgainst2ndPlayer) {
            if (result === firstPlayer.playerName) {
                console.log(result + 'won ' + firstPlayerBet + "ILS, and now he has " + (firstPlayer.playerAmount + firstPlayerBet) + "ILS");
                firstPlayer.playerAmount += firstPlayerBet;
                secondPlayer.playerAmount -= secondPlayerBet;
            } else {
                console.log(result + ' won ' + secondPlayerBet + " ILS, and now he has " + (secondPlayer.playerAmount + secondPlayerBet) + " ILS");
                firstPlayer.playerAmount -= firstPlayerBet;
                secondPlayer.playerAmount += secondPlayerBet;
            }
        } else {
            if (result === firstPlayer.playerName) {
                console.log(result + ' won ' + firstPlayerBet + " ILS, and now he has " + (firstPlayer.playerAmount + firstPlayerBet) + " ILS");
                firstPlayer.playerAmount += firstPlayerBet;
            } else {
                console.log('Computer won!, and you lost "' + firstPlayerBet + '"ILS, and now you have ' + (firstPlayer.playerAmount - firstPlayerBet) + "ILS");
                firstPlayer.playerAmount -= firstPlayerBet;
            }
        }
    }

    function printCardsResult(firstPlayerCard, secondPlayerCard) {
        if (isplayingAgainst2ndPlayer) {
            console.log(`${firstPlayer.playerName} has the card "${firstPlayerCard}", and ${secondPlayer.playerName} has the card "${secondPlayerCard}"`);
        } else {
            console.log(`${firstPlayer.playerName} has the card "${firstPlayerCard}", and the computer has the card "${secondPlayerCard}"`);
        }

    }

    function calcWhoWon(firstPlayerCard, secondPlayerCard) {
        if (firstPlayerCard > secondPlayerCard) {
            return firstPlayer.playerName;
        }
        else if (firstPlayerCard < secondPlayerCard) {
            if (isplayingAgainst2ndPlayer) {
                return secondPlayer.playerName;
            } else {
                return 'computer';
            }
        }
        else {
            return 'draw';
        }
    }

    function getRandomCard() {
        return Math.floor(Math.random() * 12 + 1);
    }

    function askForValidBetFromThePlayer(player) {
        let bet = Number(readlineSync.question(`${player.playerName}, please enter an integer positive bet :`));
        if (isNaN(bet) || bet < 1 || bet % 1 !== 0) {
            console.log('It is not a valid bet, goodBye')
            throw "stop execution";
        } else if (player.playerAmount < bet) {
            console.log('It is not a valid bet, goodBye')
            throw "stop execution";
        } else {
            return bet;
        }
    }

    function checkIfThereIsMoneyLeft() {
        if (isplayingAgainst2ndPlayer) {
            if (firstPlayer.playerAmount > 1 && secondPlayer.playerAmount > 1) {
                return true;
            } else {
                return false;
            }
        } else {
            if (firstPlayer.playerAmount > 1) {
                return true;
            } else {
                return false;
            }
        }
    }

    function printHello(name) {
        console.log(`Hey ${name}, you currently have 50 NIS, good luck!`);
    }

    function Player(playerName) {
        this.playerName = playerName;
        this.playerAmount = 50;
    }

    function getUserName(player) {
        let inputName = readlineSync.question(`Please enter ${player} name :`);
        if (inputName.length === 0) {
            throw "stop execution";
        }
        return inputName;
    }

})();
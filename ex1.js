

let readlineSync = require('readline-sync');
 
let userName = readlineSync.question('Please enter your name :');
console.log('Hello ' + userName + '!');
(function () {

    /**
     * I created an algorithm so that for each question I created a specific object with keys and values.
     * So that the values ​​are hidden, in this way the answer with the highest value can be anywhere in terms
     * of the order of the answers.
     * 
     */

        console.log(`
    ██╗    ██╗██╗██╗     ██╗         ██╗   ██╗ ██████╗ ██╗   ██╗    ██████╗ ███████╗
    ██║    ██║██║██║     ██║         ╚██╗ ██╔╝██╔═══██╗██║   ██║    ██╔══██╗██╔════╝
    ██║ █╗ ██║██║██║     ██║          ╚████╔╝ ██║   ██║██║   ██║    ██████╔╝█████╗  
    ██║███╗██║██║██║     ██║           ╚██╔╝  ██║   ██║██║   ██║    ██╔══██╗██╔══╝  
    ╚███╔███╔╝██║███████╗███████╗       ██║   ╚██████╔╝╚██████╔╝    ██████╔╝███████╗
     ╚══╝╚══╝ ╚═╝╚══════╝╚══════╝       ╚═╝    ╚═════╝  ╚═════╝     ╚═════╝ ╚══════╝

      █████╗     ███╗   ███╗██╗██╗     ██╗     ██╗ ██████╗ ███╗   ██╗ █████╗ ██╗██████╗ ███████╗    ██████╗ 
     ██╔══██╗    ████╗ ████║██║██║     ██║     ██║██╔═══██╗████╗  ██║██╔══██╗██║██╔══██╗██╔════╝    ╚════██╗
     ███████║    ██╔████╔██║██║██║     ██║     ██║██║   ██║██╔██╗ ██║███████║██║██████╔╝█████╗        ▄███╔╝
     ██╔══██║    ██║╚██╔╝██║██║██║     ██║     ██║██║   ██║██║╚██╗██║██╔══██║██║██╔══██╗██╔══╝        ▀▀══╝ 
     ██║  ██║    ██║ ╚═╝ ██║██║███████╗███████╗██║╚██████╔╝██║ ╚████║██║  ██║██║██║  ██║███████╗      ██╗   
     ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═╝╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝      ╚═╝                                                                                                                                                                                                                                      
      `)

    let readlineSync = require('readline-sync');
    let sumOfValueAnswers = 0;

    const answersArr = new Array({
        'Work': 4,
        'Vacation': 1,
        'Sports': 2,
        'Career': 3
    }, {
        'Food': 2,
        'Recreation': 1,
        'Money': 4,
        'Healthcare': 3
    }, {
        'I would not want a business': 1,
        'Real estate': 3,
        'Restaurant': 2,
        'Hi-Tech': 4
    }, {
        'Of course': 3,
        'My husband/wife has to work too': 4,
        'Only my husband/wife has to work': 2,
        'I am waiting for an inheritance': 1
    }, {
        '0 - 2': 1,
        '2 - 4': 2,
        '4 - 5': 3,
        '5 - 7': 4
    }, {
        'Most of the time': 3,
        'In rare cases': 2,
        'Always': 4,
        'Not at all': 1
    }, {
        'Less than 3': 1,
        '3 - 7': 2,
        '7 - 9': 4,
        'More than 9': 3
    }, {
        'Lion': 4,
        'Dog': 3,
        'Dolphin': 2,
        'Sloth': 1
    }, {
        'Not at all': 1,
        'Most of the time': 3,
        'In rare cases': 2,
        'Always': 4
    }, {
        'I am not working': 1,
        'Sometimes': 3,
        'Never': 4,
        'Almost always': 2
    });

    const questionArr = new Array(
        'Which would you prefer more?',
        'What is the most important thing to you?',
        'if you have a business in the future, what would it be?',
        'Would you be willing to be the only breadwinner in your home?',
        'How many days a week do you work?',
        'Are you finishing any actions you have started?',
        'How many hours do you work a day?',
        'Choose an animal :',
        'Are you meeting your goals?',
        'Are you late for work?'
    );

    for (let i = 0; i < answersArr.length; i++) {
        performAskingQuestion(answersArr[i], questionArr[i], i + 1);
    }

    quizResults();

    function performAskingQuestion(answers, question, questionNumber) {
        console.log(`
oooooo oooooo oooooo oooooo oooooo oooooo oooooo
oooooo Question ${questionNumber}:   oooooo oooooo oooooo oooooo
oooooo oooooo oooooo oooooo oooooo oooooo oooooo
`);
        let index = readlineSync.keyInSelect(Object.keys(answers), question);
        if (index === -1) {
            throw "stop execution";
        }
        let value = Object.values(answers)[index];
        sumOfValueAnswers += value;
    }

    function quizResults(){
        
        console.log(`
         ██████╗ ██╗   ██╗██╗███████╗    ██████╗ ███████╗███████╗██╗   ██╗██╗  ████████╗███████╗       
        ██╔═══██╗██║   ██║██║╚══███╔╝    ██╔══██╗██╔════╝██╔════╝██║   ██║██║  ╚══██╔══╝██╔════╝    ██╗
        ██║   ██║██║   ██║██║  ███╔╝     ██████╔╝█████╗  ███████╗██║   ██║██║     ██║   ███████╗    ╚═╝
        ██║▄▄ ██║██║   ██║██║ ███╔╝      ██╔══██╗██╔══╝  ╚════██║██║   ██║██║     ██║   ╚════██║    ██╗
        ╚██████╔╝╚██████╔╝██║███████╗    ██║  ██║███████╗███████║╚██████╔╝███████╗██║   ███████║    ╚═╝
         ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝    ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝   ╚══════╝       `)
                                                                                                       

        if (sumOfValueAnswers > 29) {
            console.log('Congratulations, you will be a millionaire!!!');
        }
        else if (sumOfValueAnswers < 19) {
            console.log('You are on your way to being poorer than on vacation');
        } else {
            console.log('You probably wont be rich, but you will be well established financially');
        }

    }

})();

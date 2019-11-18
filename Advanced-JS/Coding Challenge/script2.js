function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}


var question1 = new Question('What is the sum of 5 + 5?', [10, 12, 2], 0);
var question2 = new Question('What is the sun made of?', ['water', 'fire', 'air'], 1);
var question3 = new Question('What do fishermen fish?', ['cats', 'dogs', 'fish'], 2);

var questions = [question1, question2, question3];

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (i = 0; i < this.answers.length; i++) {
        console.log(i + ' : ' + this.answers[i]);
    }
}

Question.prototype.correctAnswer = function(ans, callback) {
    var sc;
    if(ans === this.correct) {
        console.log("Correct answer!!!");   
        sc = callback(true);
    } else {
        console.log("Wrong answer...");
        sc = callback(false);
    }

    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('Your current score: ' + score);
    console.log('---------------------------');
    
}

function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion() {
    var n  = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
    
    var answer = prompt("Please select the right answer!");
    

    if (answer !== 'exit') {
        questions[n].correctAnswer(parseInt(answer), keepScore);

        nextQuestion();
    }
}

nextQuestion();



// put the question numbers in the () of the function field. Log the question field op the object in the function with the right number 
// passed in. 

//  return function (question) {
//     if (iRnd === 0) {
//         log question.question blabla
//         add score ++
//     }
// }

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


var n  = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

Question.prototype.correctAnswer = function(ans) {
    if(ans === this.correct) {
        console.log("Correct answer!!!");
    } else {
        console.log("Wrong answer...");
    }
}

var answer = parseInt(prompt("Please select the right answer!"));

questions[n].correctAnswer(answer);




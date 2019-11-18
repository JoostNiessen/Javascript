function Question(questionNumber, question, possibleAnswer, correctAnswer) {
    this.questionNumber = questionNumber;
    this.question = question;
    this.possibleAnswer = possibleAnswer;
    this.correctAnswer = correctAnswer;
}

var correctAnswer;
var question;
var questionNumber;


// generate the questions through the function with the answers in the ()
// 

var question1 = new Question(1, 'What is the sum of 5 + 5?', [10, 12, 2], 0);
var question2 = new Question(2, 'What is the sun made of?', ['water', 'fire', 'air'], 1);
var question3 = new Question(3, 'What do fishermen fish?', ['cats', 'dogs', 'fish'], 2);

var questionArray = [question1, question2, question3];

// create seperate questions which you can log with the number
// get one random question


for (i = 0; i < questionArray.length; i++) {
    question = questionArray[i];
    questionNumber = question.questionNumber;
}
console.log(question);


var iRnd = Math.floor(Math.random() * 3 + 1);


if (questionNumber === iRnd) {
    console.log(question.question);
}











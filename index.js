var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + " to how well do you know Anuj?")

function questiongame(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase())
  {
    console.log("Your answer is correct");
    score++;
  }
  else
  {
    console.log("Your answer is incorrect");
  }
  console.log("Your current score is " + score);
  console.log("---------------------")
}

var firstQnA = 
{
  question: "What is my full name? ",
  answer: "anuj yadav"
}
var secondQnA = 
{
  question: "Who is my favourite marvel superhero? ",
  answer: "ironman"
}
var thirdQnA = 
{
  question: "Who is my favourite DC superhero? ",
  answer: "batman"
}
var forthQnA = 
{
  question: "Where do I live? ",
  answer: "Ahmedabad"
}
var fifthQnA = 
{
  question: "Where do I work? ",
  answer: "keyideas"
}
var sixthQnA = 
{
  question: "What is my favourite food? ",
  answer: "dabeli"
}
var questions = [firstQnA, secondQnA, thirdQnA, forthQnA, fifthQnA, sixthQnA];
for (var i=0; i<questions.length;i++)
{
  var currentquestion = questions[i];
  questiongame(currentquestion.question,currentquestion.answer);
}
console.log("---------------------")
console.log("---------------------")
console.log("Your final score is " + score)
const readLine = require ('readline-sync');
let answerList = ['signs points to yes', 'the gods say wants to say no', 'maybe so']

let prompt = readLine.question("This code is used for fortune-telling or seeking advice do you accept these terms and conditions? ")
let prompt2 = readLine.question("Now, ask your question: ")

let randomNum = Math.floor(Math.random()*answerList.length);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer)
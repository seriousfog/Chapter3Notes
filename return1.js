const readLine = require ('readline-sync');

//1

// function nameswap(){
//     let first = readLine.question("Enter your first name: ");
//     let second = readLine.question("Enter your last name: ");
//     return (`${second}, ${first}`)
// }
// console.log(nameswap())

//2

// function numbergenerator(){
//     let interger = readLine.question("Enter a number 0-9: ");
//     let interger2 = readLine.question("Enter another number 0-9: ");
//     return (`${interger}${interger2}`)
// }
// console.log(numbergenerator())

//3

// function averagetemperature(){
//     let temp1 = Number(readLine.question("Enter a temperature for Monday: "));
//     let temp2 = Number(readLine.question("Enter a temperature for Tuesday: "));
//     let temp3 = Number(readLine.question("Enter a temperature for Wednesday: "));
//     let temp4 = Number(readLine.question("Enter a temperature for Thursday: "));
//     let temp5 = Number(readLine.question("Enter a temperature for Friday: "));
//     let temp6 = Number(readLine.question("Enter a temperature for Saturday: "));
//     let temp7 = Number(readLine.question("Enter a temperature for Sunday: "));
//
//     let total = (temp1+temp2+temp3+temp4+temp5+temp6+temp7)/7
//     return( total.toFixed(2));
//
// }
// console.log(averagetemperature())

//4

//Charity Collection Revisited
// function sum(num1, num2, num3, num4){
//     console.log(`${num1} + ${num2} + ${num3} = ${num4}`);
// }
// sum(500, 500, 500 ,1500)
// let num4 = 500
// {
//     if( num4 > 1000 && num4 < 2000 )
//         console.log(`LETS DOUBLE IT GIVE IT TO YOU, YOU GAIN ${num4*2} DOLLARS`)
//     else if( num4 < 1000){
//         console.log(`Add 100 dollars to make ${num4+100}`)
//     }
//     else if( num4 > 2000 ){
//         console.log(`Double it and make ${num4*2}`)
//     }
// }

//5

// function dart() {
//     let round1 = Number(readLine.question("Enter your first score for round 1: "));
//     let round2 = Number(readLine.question("Enter your first score for round 2: "));
//     let round3 = Number(readLine.question("Enter your first score for round 3: "));
//     return (`Your total score is: ${round1 + round2 + round3}`);
// }
// console.log(dart())

//6

// function dart() {
//     let round1 = Number(readLine.question("Enter your first score for player 1: "));
//     let round2 = Number(readLine.question("Enter your second score for player 1: "));
//     let round3 = Number(readLine.question("Enter your third score for player 1: "));
//     let round4 = Number(readLine.question("Enter your first score for player 2: "));
//     let round5 = Number(readLine.question("Enter your second score for player 2: "));
//     let round6 = Number(readLine.question("Enter your third score for player 2: "));
//     console.log(`Player 1's total score is: ${round1 + round2 + round3} and Player 2's total score is: ${round4 + round5 + round6}`);
//
//     if( round1+round2+round3 > round4+round5+round6 )
//         console.log("Player 1 wins!")
//     else
//         console.log("Player 2 wins!")
//     }{
// }
// console.log(dart())
//

//7

// function linear() {
//     let slope = readLine.question('What is the slope?: ');
//     let yintercept = readLine.question('What is the y-intercept?: ');
//     console.log(`y = ${slope}x + ${yintercept}`)
// }
// linear();

//8

// function slope() {
//     let x1 = readLine.question('What is x1?: ');
//     let y1 = readLine.question('What is y1?: ');
//     let x2 = readLine.question('What is x2?: ');
//     let y2 = readLine.question('What is y2?: ');
//     console.log(`The slope of the line is ${y2 - y1 / x2 - x1}`)
// }
// slope();


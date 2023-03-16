// Parameters are placeholder variables that allow us to reuse functions

// Example 1: Without Parameter

// function printYes(){
//
//     console.log('yes');
//
// }
//
// printYes();
// printYes();

//Example 2: With parameter

// function printText(text){
//
//     console.log(text);
//
// }
//
// printText('HEY');
// printText('I LOVE FRIDAYS');

//Return statements provide values to the rest of the program
//Returned values can be used by other parts of the code
//console.log only produces "side effects" that cannot be used by other parts of the code

//Example 3: With side effects (no return)

// function double(num){
//
//     console.log(num*2);
//
// }
//
// double(3);

//Example 4: Using return

// function triple(num){
//     return (num*3);
//
// }
//
// console.log(triple(5));
// let lives = triple(7);
// lives = lives-1;
// console.log(lives);
// }

//Example 5: Another Return
// function loselife(lives){
//     return(lives - 1);
// }
//
// let totalLives = 10
// totalLives = loselife(totalLives);
// console.log(totalLives);

//Example 6: Different scopes

// let x=10; //global x
//
// if (true){
//     let y=20; //local y
//     let z= 30; //local z
//     console.log(x + y + z);
// }
//
// console.log(x);

//Example 6: no naming conflict

// function half(n){
//     return (n/2);
// }
// let n=10; //global n is NOT THE SAME n
// console.log(half(100));
// console.log(n);
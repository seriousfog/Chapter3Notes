//Intro to Arrays

//create
let students = ['Dave', 'Nick', 'John', 'Pam' ];
let values = [1, 2, 3, 4];

//accessing items in array
console.log(students);
console.log(students[0]); //beginning item has index or position 0
console.log(students[1]); //index 1 means 1 item away from the beginning, or 2nd
console.log(students[2]);
console.log(students[3]);
console.log(students[4]) //error, as there is no 5th item
console.log(students[5-2]);

//formatting items in an array
console.log(`Student: ${students[1]}`)
console.log('Student: ' + students[1]);

//changing an item
students[1]='Johnny'
console.log(students);

//push adds to the end
students.push('Sam');
console.log(students);
students.push('Kirk', 'Jorge'); //you can push more than 1 item at a time
console.log(students);

//pop removes the last item from the end
students.pop()
console.log(students);

//shift removes the beginning item
students.shift();
console.log(students);

//unshift adds an item to the beginning
students.unshift('Zeke');
console.log(students);
students.unshift('Alice', 'Him'); //you can unshift more than 1 item
console.log(students);

//length of array = number of items in it
console.log(students.length);
console.log(students[students.length-1]);//gives last item

//slice up a piece of the original array
let fruits = ['apple', 'banana', 'orange', 'lemon', 'grape'];
let citrus = fruits.slice(2, 4)
console.log(citrus)
//first number is the starting index, which we include
//second number is the index we stop BEFORE. Does not include.
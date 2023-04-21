const readLine = require ('readline-sync');

let sandwichprice = {
    chicken: 5.25,
    beef: 6.25,
    tofu: 5.75
}
let drinkprice = {
    small: 1.00,
    medium: 1.75,
    large: 2.25
}
let totalprice = sandwichprice + drinkprice


let sandwich = readLine.question("What type of sandwich do you want to get? (chicken $5.25, beef $6.25, tofu $5.75): ")
if (sandwich == "beef"){
    sandwich.beef = 6.25
}
console.log(`A ${sandwich} sandwich and...`)
let drink = readLine.question("Would you want a beverage with that?: ")

if (drink == "yes"){
    let drinksize = readLine.question("A small ($1.00), medium ($1.75), or a large ($2.25)? ")
    console.log(`So you will be having a ${sandwich} sandwich and a ${drinksize} drink. `)
}
if (drink == "no")
    console.log(`No? Ok. So you will only be having a ${sandwich} sandwich.`)
console.log(`And so, your total so far is $${totalprice}`)





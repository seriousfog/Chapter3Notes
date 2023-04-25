const readLine = require ('readline-sync');

let sandwichprice = []
let drinkprice = []
let friesprice = []

let sandwich = readLine.question("What type of sandwich do you want to get? (chicken $5.25, beef $6.25, tofu $5.75): ")
console.log(`A ${sandwich} sandwich and...`)
if (sandwich == "chicken"){
    let chickensandwich = 5.25
    sandwichprice.push(chickensandwich)
}
if (sandwich == "beef"){
    let beefsandwich = 6.25
    sandwichprice.push(beefsandwich)
}
if (sandwich == "tofu"){
    let tofusandwich = 5.75
    sandwichprice.push(tofusandwich)
}
let drink = readLine.question("Would you want a beverage with that?: ")

if (drink == "yes"){
    let drinksize = readLine.question("A small ($1.00), medium ($1.75), or a large ($2.25)? ")
    if (drinksize == "small"){
        let smalldrink = 1.00
        drinkprice.push(smalldrink)
    }
    if (drinksize == "medium"){
        let mediumdrink = 1.75
        drinkprice.push(mediumdrink)
    }
    if (drinksize == "large"){
        let largedrink = 1.00
        drinkprice.push(largedrink)
    }
    console.log(`So you will be having a ${sandwich} sandwich and a ${drinksize} drink. `)
}
if (drink == "no")
    console.log(`No? Ok. So you will only be having a ${sandwich} sandwich.`)

let fries = readLine.question("Would you like french fries?: ")
if (fries == "yes" || fries == "sure") {
    let friesSize = readLine.question("A small ($1.00), medium ($1.50) or a large ($2.00)? ")
    console.log(`So you will also be having ${friesSize} fries. `)
    if (friesSize == "small") {
        let megafries = readLine.question("Would you like to MEGA-SIZE your small fries?: ")
        if (megafries == "yes") {
        }
    }
    if (friesSize == "small"){
        let smallfries = 1.00
        friesprice.push(smallfries)
    }
    if (friesSize == "medium"){
        let mediumfries = 1.50
        friesprice.push(mediumfries)
    }
    if (friesSize == "large"){
        let largefries = 2.00
        friesprice.push(largefries)
    }
    // if (megafries == "yes"){
    //     let megafries = 2.00
    //     totalprice.push(megafries)
    // }
    console.log(`Now, ${friesSize} fries will be added to your total.`)
}
if (fries == "no")
    console.log(`No? Ok.`)
console.log(`And so, your total so far is $${sandwichprice + drinkprice + friesprice}!`)










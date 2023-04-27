const readLine = require ('readline-sync');

let totalprice = []
let ordered = []

let sandwich = readLine.question("What type of sandwich do you want to get? (chicken $5.25, beef $6.25, tofu $5.75): ")
console.log(`A ${sandwich} sandwich and...`)
if (sandwich == "chicken"){
    ordersandwich = 1
    totalprice.push(5.25)
    ordered.push("chicken sandwich")

}
if (sandwich == "beef"){
    ordersandwich = 1
    totalprice.push(6.25)
    ordered.push("beef sandwich")

}
if (sandwich == "tofu"){
    ordersandwich = 1
    totalprice.push(5.75)
    ordered.push("tofu sandwich")

}
let drink = readLine.question("Would you want a beverage with that?: ")

if (drink == "yes"){
    let drinksize = readLine.question("A small ($1.00), medium ($1.75), or a large ($2.25)? ")
    if (drinksize == "small"){
        orderdrink = 1
        totalprice.push(1.00)
        ordered.push(" small drink")

    }
    if (drinksize == "medium"){
        orderdrink = 1
        totalprice.push(1.75)
        ordered.push(" large drink")

    }
    if (drinksize == "large"){
        orderdrink = 1
        totalprice.push(1.00)
        ordered.push(" large drink")

    }
    console.log(`So you will be having a ${sandwich} sandwich and a ${drinksize} drink. `)
}
if (drink == "no"){
    orderdrink = 1
    console.log(`No? Ok. So you will only be having a ${sandwich} sandwich for now.`)
}

let fries = readLine.question("Would you like french fries?: ")
if (fries == "yes" || fries == "sure") {
    let friesSize = readLine.question("A small ($1.00), medium ($1.50) or a large ($2.00)? ")
    console.log(`So you will also be having ${friesSize} fries. `)

    if (friesSize == "small") {
        let megafries = readLine.question("Would you also like to MEGA-SIZE your small fries?: ")
        if (megafries === "yes") {
            console.log(`You will now get the large fries price for the MEGA-SIZE fries.`)
        }
    }
    if (friesSize == "small"){
        orderfries = 1
        totalprice.push(1.00)
        ordered.push(" small fries")

    }
    if (friesSize == "medium"){
        orderfries = 1
        totalprice.push(1.50)
        ordered.push(" medium fries")

    }
    if (friesSize == "large"){
        orderfries = 1
        totalprice.push(2.00)
        ordered.push(" large fries")

    }
    // if (megafries == "yes"){
    //     orderfries = 1
    //     totalprice.push(2.00)
    //     ordered.push(" mega fries")
    // }
    console.log(`Now, ${friesSize} fries will be added to your total.`)
}
if (fries == "no"){
    orderfries = 1
console.log(`No? Ok.`)
}
{
    let ketchup = readLine.question("How much ketchup packets would you like? ($0.25 each): ")
    totalprice.push(ketchup * 0.25)
    ordered.push(` and ${ketchup} ketchup packets.`)
}

let total = 0;
for(let i = 0; i < totalprice.length; i++) {
    total += totalprice[i]
}

if (ordersandwich + orderdrink + orderfries === 3) {
    totalprice = total - 1

}
totalprice = totalprice + (totalprice * 0.07);
totalprice = totalprice.toFixed(2);

console.log(`Your order is a ${ordered}`)
console.log(`Your total is then, $${totalprice}!`)
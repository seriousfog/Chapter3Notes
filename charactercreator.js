const readLine = require ('readline-sync');

let diceRolled = [];
let character1 = {
}

let character2 = {
}

let character3 = {
}

createChar(character1, diceRolled);
createChar(character2, diceRolled);
createChar(character3, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list){
    for (let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled ${roll}!`)
        list.push(roll);
    }
}
function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum += list[i]
    }
    return sum;
}
function rollStat(list){
    list = []
    rollDice(4, list);
    return sum(list);
}
function createChar(character, list){
    character.name = readLine.question("Enter Character Name: ")
    character.age = readLine.question("Enter Character Age: ")
    console.log("Rolling STR")
    character.strength = rollStat(diceRolled);
    console.log("Rolling DEX")
    character.dexerity = rollStat(diceRolled);
    console.log("Rolling CON")
    character.constitution = rollStat(diceRolled);
    console.log("Rolling INT")
    character.intelligence = rollStat(diceRolled);
    console.log("Rolling WIS")
    character.wisdom = rollStat(diceRolled);
    console.log("Rolling CHA")
    character.charisma = rollStat(diceRolled);
    console.log("Rolling Cooking Skills")
    character.cook = rollStat(diceRolled);
    console.log("Rolling Social Skills")
    character.sk = rollStat(diceRolled);
    console.log("Rolling HP")
    character.hp = rollStat(diceRolled);
    displayChar(character1)
    displayChar(character2)
    displayChar(character3)
}

function displayChar(char){
    console.log('------------------------')
    console.log(`Name: ${char.name}`);
    console.log(`Age: ${char.age}`)
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.dexerity}`);
    console.log(`CON: ${char.constitution}`);
    console.log(`INT: ${char.intelligence}`);
    console.log(`WIS: ${char.wisdom}`);
    console.log(`CHA: ${char.charisma}`);
    console.log(`COOKING: ${char.cook}`);
    console.log(`SOCIAL SKILLS: ${char.sk}`);
    console.log(`HP: ${char.hp}`);
    console.log('------------------------')
}
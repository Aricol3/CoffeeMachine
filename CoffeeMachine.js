const input = require('sync-input');

let machine = {
    water: 400,
    milk: 540,
    coffeeBeans: 120,
    cups: 9,
    money: 550
}

let coffeeList = [{
    name: "espresso",
    water: 250,
    milk: 0,
    coffeeBeans: 16,
    money: 4
}, {
    name: "latte",
    water: 350,
    milk: 75,
    coffeeBeans: 20,
    money: 7
}, {
    name: "cappuccino",
    water: 200,
    milk: 100,
    coffeeBeans: 12,
    money: 6
}];

//check if there are enough resources and make the coffee
function makeCoffee(coffee) {
    coffee--;
    switch (true) {
        case machine.water < coffeeList[coffee].water:
            console.log(`Sorry, not enough water!`);
            break;
        case machine.milk < coffeeList[coffee].milk:
            console.log(`Sorry, not enough milk!`);
            break;
        case machine.coffeeBeans < coffeeList[coffee].coffeeBeans:
            console.log(`Sorry, not enough coffee beans!`);
            break;
        case machine.cups<1:
            console.log(`Sorry, not enough cups!`);
            break;
        default:
            console.log(`I have enough resources, making you a coffee!`);
            machine.water -= coffeeList[coffee].water;
            machine.milk -= coffeeList[coffee].milk;
            machine.coffeeBeans -= coffeeList[coffee].coffeeBeans;
            machine.cups--;
            machine.money += coffeeList[coffee].money;
            break;
    }
    console.log();
}

//buy coffee from machine
function buy() {
    console.log(`\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:`)
    let action = input();
    switch (action) {
        case '1':
        case '2':
        case '3':
            makeCoffee(action);
            break;
        case "back":
            console.log();
            break;
        default:
            console.log(`Wrong input\n`);
            break;
    }

    machineMenu();
}

//fill the machine
function fill() {
    console.log();
    console.log(`Write how many ml of water you want to add:`);
    let addWater = input();
    machine.water += Number(addWater);
    console.log(`Write how many ml of milk you want to add:`);
    let addMilk = input();
    machine.milk += Number(addMilk);
    console.log(`Write how many grams of coffee beans do you want to add:`);
    let addCoffee = input();
    machine.coffeeBeans += Number(addCoffee);
    console.log(`Write how many disposable cups of coffee do you want to add:`);
    let addCups = input();
    machine.cups += Number(addCups);
    console.log();

    machineMenu();
}

//take money from machine
function take() {
    console.log(`I gave you $${machine.money}`);
    machine.money = 0;

    machineMenu();
}

//machine resources
function remaining() {
    console.log(`\nThe coffee machine has:
${machine.water} ml of water
${machine.milk} ml of milk
${machine.coffeeBeans} g of coffee beans
${machine.cups} disposable cups
$${machine.money} of money\n`);
    machineMenu();
}

function machineMenu() {
    console.log(`Write action (buy, fill, take, remaining, exit):`);
    let action = input();
    switch (action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            remaining();
            break;
        case "exit":
            break;
        default:
            console.log(`Wrong input\n`);
            machineMenu();
            break;
    }
}

machineMenu();
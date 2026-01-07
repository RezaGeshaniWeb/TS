// Data Types
/*
const message: string = "Hello TS"
let myName: string = "Reza Geshani"
let score: number = 20
let isProgrammer: boolean = true

let numbers: number[] = [2, 4, 6, 8, 10]
let cities: Array<string> = ["tehran", "hamedan", "sanandaj", "esfahan"]

let persons: [string, number] = ["reza", 25]  // touple

let info: { name: string, age: number } = { name: 'reza', age: 25 }

let randomValue: any = "value"
*/
// enum
/*
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const moveDirection: Direction = Direction.Up
console.log(moveDirection);

enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
}

const setColor: Color = Color.Blue
console.log(setColor);
*/
// functions
function add(a, b) {
    return a + b;
}
console.log(add(4, 9));
function sayHi(name) {
    return "Hi ".concat(name);
}
console.log(sayHi('reza'));
function logMessage(message) {
    console.log("your message is: ".concat(message));
}
logMessage('lorem ipsum...');
function person(name, age) {
    return age ? "Hi ".concat(name, " with age ").concat(age) : "Hi ".concat(name);
}
console.log(person('mohammadreza'));
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hi"; }
    return "".concat(greeting, " ").concat(name);
}
console.log(greet('alireza'));

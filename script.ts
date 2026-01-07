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
/*
function add(a: number, b: number): number {
    return a + b
}
console.log(add(4, 9));

function sayHi(name: string): string {
    return `Hi ${name}`
}
console.log(sayHi('reza'));

function person(name: string, age?: number): string {
    return age ? `Hi ${name} with age ${age}` : `Hi ${name}`
}
console.log(person('mohammadreza'));

function greet(name: string, greeting: string = "Hi"): string {
    return `${greeting} ${name}`
}
console.log(greet('alireza'));
*/


// void
function logMessage(message: string): void {
    console.log(`your message is: ${message}`);
}
logMessage('lorem ipsum...')


// never
function throwError(message: string): never {
    throw new Error(message)
}
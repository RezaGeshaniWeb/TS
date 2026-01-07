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
/*
function logMessage(message: string): void {
    console.log(`your message is: ${message}`);
}
logMessage('lorem ipsum...')


// never
function throwError(message: string): never {
    throw new Error(message)
}
*/


// function Overloading
/*
function combine(a: number, b: number): number
function combine(a: string, b: string): string
function combine(a: any, b: any): any {
    return a + b
}

console.log(combine(10, 70));
console.log(combine('reza', 'geshani'));
*/


// example todo:
enum Status {
    Pending = "در انتظار",
    InProgress = "در حال انجام",
    Done = "انجام شده",
}

let tasks: Array<{ id: number, title: string, status: Status }> = []

function addTask(title: string, status: Status): void {
    const newTask = { id: tasks.length + 1, title, status }
    tasks.push(newTask)
    console.log(`task ${title} added!`);
}

function showTasks(): void {
    console.log(`Tasks List: `)
    tasks.map(task => console.log(`${task.id} - ${task.title} - ${task.status}`))
}

function updateTask(id: number, newStatus: Status): void {
    let task = tasks.find(task => task.id == id)
    if (task) {
        task.status = newStatus
        console.log('task status was updated');
    } else {
        console.log('not found');
    }
}

function deleteTask(id: number): void {
    tasks = tasks.filter(task => task.id != id)
}

addTask("Learning Task", Status.Pending)
addTask("Going to gym", Status.Done)
updateTask(1, Status.InProgress)
showTasks()
deleteTask(1)
showTasks()
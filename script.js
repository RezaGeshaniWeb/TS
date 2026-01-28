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
/*
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
*/
// Interface
/*
interface User {
    id: number,
    name: string,
    email: string,
}

const user1: User = {
    id: 1,
    name: 'reza',
    email: 'reza@gmail.com',
}
console.log(user1)


function showInfo(user: User) {
    console.log(user.email)
}
showInfo(user1)
*/
// type
/*
type UserType = {
    id: number,
    name: string,
    email: string,
}

const user2: UserType = {
    id: 2,
    name: 'alireza',
    email: 'alireza@gmail.com',
}
console.log(user2);


type NumberArray = number[]
const numbers: NumberArray = [1, 2, 3]
console.log(numbers);


type Person = [string, number]
const person: Person = ['reza', 20]
console.log(person)
*/
// Interface extends
/*
interface Person {
    name: string,
}

interface Employee extends Person {
    id: number,
    jobTitle: string,
}

const employee1: Employee = {
    id: 1,
    jobTitle: 'developer',
    name: 'reza',
}
console.log(employee1)
*/
// combine types
/*
type Child = {
    name: string,
}

type Student = Child & {
    id: number,
    age: number,
}

const student1: Student = {
    id: 1,
    age: 25,
    name: 'reza',
}
console.log(student1);
*/
// interface nested
/*
interface Address {
    street: string,
    city: string,
    country: string,
}

interface User {
    id: number,
    name: string,
    address: Address,
}

const user: User = {
    id: 1,
    name: 'reza',
    address: {
        street: 'main',
        city: 'tehran',
        country: 'iran',
    }
}
console.log(user)
*/
// type nested
/*
type Address = {
    street: string,
    city: string,
    country: string,
}

type User = {
    id: number,
    name: string,
    address: Address,
}

const user: User = {
    id: 1,
    name: 'reza',
    address: {
        street: 'main',
        city: 'tehran',
        country: 'iran',
    }
}
console.log(user)
*/
// Readonly - Optional
/*
interface User {
    readonly id: number,
    name: string,
    age?: number
}

const user: User = {
    id: 1,
    name: 'reza',
    // age: 25
}
user.name = 'ali'
console.log(user)
*/
// class
/*
class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    introduce(): void {
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const person1 = new Person("reza", 25)
person1.introduce()
*/
// public , private , protected
/*
class User {
    public name: string
    private email: string
    protected status: string

    constructor(name: string, email: string, status: string) {
        this.name = name
        this.email = email
        this.status = status
    }

    public getUserInfo() {
        console.log(`name is: ${this.name}, status is: ${this.status}`)
    }

    public updateStatus(newStatus: string) {
        this.status = newStatus
    }

    private getEmail() {
        return this.email
    }
}

const user = new User('reza', 'reza@gmail.com', 'active')
user.getUserInfo()
console.log(user.name);

user.updateStatus('inactive')
user.getUserInfo()

class Admin extends User {
    constructor(name: string, email: string, status: string) {
        super(name, email, status)
    }

    public getAdminInfo() {
        console.log(`${this.name} - ${this.status}`);
    }
}
*/
// Generics
/*
function showFirst<T>(arr: T[]): T {
    return arr[0]
}

console.log(showFirst(['reza', 'perjman', 'ali']))
console.log(showFirst([22, 33, 44]))

let value: Array<number> = [3, 4, 5]

interface Box<T> {
    content: T
}

let box1: Box<number> = { content: 500 }
let box2: Box<string> = { content: 'Hi' }
*/
// NameSpace
/*
namespace Products {
    interface Product {
        readonly id: number,
        name: string,
        price?: number,
    }

    const products: Product[] = [
        { id: 1, name: 'mobile', price: 10_000_000 },
        { id: 2, name: 'tablet', price: 7_000_000 },
        { id: 3, name: 'laptop', price: 5_000_000 },
    ]

    export function listProduct(): string[] {
        return products.map(item => `${item.name} - ${item.price}`)
    }

    console.log(listProduct());
}

namespace Customers {
    interface Customer {
        readonly id: number,
        name: string,
        email?: string,
    }

    const people: Customer[] = [
        { id: 1, name: 'reza', email: 'reza@gmail.com' },
        { id: 2, name: 'alireza', email: 'alireza@gmail.com' },
        { id: 3, name: 'mahdi', email: 'mahdi@gmail.com' },
    ]

    export function showPeople(): string[] {
        return people.map(item => `${item.name} - ${item.email}`)
    }

    console.log(showPeople());
}

console.log(Products.listProduct());
console.log(Customers.showPeople());
*/ 

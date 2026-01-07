// Data Types
var message = "Hello TS";
var myName = "Reza Geshani";
var score = 20;
var isProgrammer = true;
var numbers = [2, 4, 6, 8, 10];
var cities = ["tehran", "hamedan", "sanandaj", "esfahan"];
var persons = ["reza", 25]; // touple
var info = { name: 'reza', age: 25 };
var randomValue = "value";
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var moveDirection = Direction.Up;
console.log(moveDirection);
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var setColor = Color.Blue;
console.log(setColor);

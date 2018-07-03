/*
ES6 crash course
Babel - JavaScript compiler

var:
    - function scoped variable,
    - you are allowed to reuse variable names
let:
    - block scoped variable, block scope - everything what is closed in curly braces {},
    - you are not allowed to reuse variable names
    - you are allowed to update variable (value can be reassigned)
const:
    - block scoped
    - you are not allowed to update variable
    - if your variable is an object you can't change value of the object but you can change it's properties
*/

// ---- ARROW FUNCTION ----
const integers = [1, 2, 3];
const ages = [23, 42, 6, 18];
// const updatedIntegers = integers.map(function(number) {
//    return number += 1
// });

// const adults = ages.filter(function(age) {
//     return age > 20
// });

// const updatedIntegers = integers.map((number) => {
//     return number += 1
// });

// const adults = ages.filter((age) => {
//     return age > 20
// });

// const updatedIntegers = integers.map((number) => number += 1);

// const adults = ages.filter((age) => age > 20);

// const updatedIntegers = integers.map(number => number += 1);

const adults = ages.filter(age => age > 20);

const updatedIntegers = integers.map(() => "Paul");

console.log(updatedIntegers);
console.log(adults);

// ---- TEMPLATE STRINGS `${ variable }` ----

// ---- PROTOTYPE METHODS ----
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.speak = function() {                   // We can add prototype methods
    console.log(`Hi, my name is ${ this.name }.`);
};

const paul = new Person('Paul', 32);

console.log(paul);
paul.speak();

// ---- ES6 CLASSES ----
class Individual {
    constructor(name, age, children) {
        this.name = name;
        this.age = age;
        this.children = children;
    }
    speak() {
        console.log(`Hello, ${this.name} is my name.`);
    }
    birth(child) {
        this.children.push(child);
        return this.children;
    }
}

const thomas = new Individual('Thomas', 28, ['Suzie', 'Greg']);
console.log(thomas);
thomas.speak();
console.log(thomas.children);
thomas.birth('Anthony');
console.log(thomas.children);

// ---- SPREAD OPERATOR ----
const names = ['Jacob', 'Brandon', 'Sean'];
const moreNames = ['Wallace', 'Paul', 'Miranda'];

// What the spread operator will do is it will take every single element from out array and it expands an array into its elements. Destructuring the arrays that the elements appear individually.

console.log(names);         // ['Jacob', 'Brandon', 'Sean'] - collection of elements
console.log(...names);      // Jacob  Brandon  Sean - expands an array into its elements
// We want to create an array like this [ 'Jacob', 'Brandon', 'Sean', 'George', 'Wallace', 'Paul', 'Miranda' ]

// ES5 way of dealing with the task above
let allNamesES5 = [];
allNamesES5 = allNamesES5.concat(names);      // ['Jacob', 'Brandon', 'Sean']
allNamesES5.push('George');                // ['Jacob', 'Brandon', 'Sean', 'George']
allNamesES5 = allNamesES5.concat(moreNames);  // ['Jacob', 'Brandon', 'Sean', 'George', 'Wallace', 'Paul', 'Miranda']

console.log(allNamesES5);

// ES6 way using Spread Operator
const allNamesES6 = [...names, 'George', ...moreNames]; // ...names / ...moreNames - these are individualized elements inside of a new array - they are not a collection anymore

console.log(allNamesES6);


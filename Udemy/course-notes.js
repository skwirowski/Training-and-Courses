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
Person.prototype.speak = function() {
    console.log(`Hi, my name is ${ this.name }.`);
};

const paul = new Person('Paul', 32);

console.log(paul);
paul.speak();


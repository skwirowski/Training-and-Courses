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

/* -------------------- SECTION 4 Lecture 16 - ELEMENTS --------------------
   Rendering elements in DOM
   -------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('ol', null,
    React.createElement('li', null, 'Take out the trash'),
    React.createElement('li', null, 'Shovel the driveway'),
    React.createElement('li', null, 'Walk the dog')
);
ReactDOM.render(element, document.getElementById('root'));
========================
import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

const element = React.createElement('ol', null,
    tasks.map((task, index) => React.createElement('li', { key: index }, task))
);
ReactDOM.render(element, document.getElementById('root'));
*/

/* -------------------- SECTION 4 Lecture 17 - JSX -------------------------
   Rendering list elements using JSX syntax
   -------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

const element =
    <ol>
        <li>{tasks[0]}</li>
        <li>{tasks[1]}</li>
        <li>{tasks[2]}</li>
    </ol>;
ReactDOM.render(element, document.getElementById('root'));
========================
import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Shovel the driveway', 'Walk the dog'];

const element =
    <div>
        <h1>Task List</h1>
        <ol>
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ol>
    </div>;
ReactDOM.render(element, document.getElementById('root'));
*/

/* ----------------- SECTION 4 Lecture 18 - COMPONENTS ---------------------
   Rendering list elements using Components
   -------------------------------------------------------------------------

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
    render() {
        return(
            <ol>
                {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ol>
        )
    }
}
class Title extends Component {
    render() {
        return(
            <h1>
                {this.props.title}
            </h1>
        )
    }
}
class Main extends Component {
    render() {
        return(
            <div>
                <Title title={"To Dos"}/>
                <List tasks={['Take out the trash', 'Walk the dog', 'Mow the lawn']} />
                <List tasks={['Shovel the driveway', 'Finish the laundry', 'Hose the driveway']} />
            </div>
        )
    }
}
ReactDOM.render(<Main />, document.getElementById('root'));
*/

/* ----------------- SECTION 5 Lecture 28 - LIFECYCLE METHODS --------------
   Different lifecycle methods of the Components, fetching data in Main component
   -------------------------------------------------------------------------

1. Constructor method - works before component is mounted to the DOM
2. Render method
3. Component did mount - is initialized just after components are in the DOM
4. Component will mount - gets invoked before the component is inserted to the DOM, before render() method gets invoked
5. Component did update - this lifecycle method gets called whenever the component is re-rendered / whenever we update state of out component to trigger a re-render
========================
The following methods are called when a component is being added to the DOM:
1. constructor() : called before component is mounted. NEVER put side effect code inside of the constructor. Use ComponentDidMount for that instead. Commonly used to initialize state or bind methods.
2. componentWillMount(): invoked immediately before mounting occurs. Called before render. Once again, DO NOT put any side effect code inside of componentWillMount, and do not make API calls in this method
3. render(): never fetch data inside of render. Should only be used to return elements.
4. componentDidMount(): Perfect place to fetch data. It gets called after render. This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render. This forces us to set up our initial state properly, otherwise you're likely to get undefined states.

The following methods are called when a component is re-rendered to the DOM:
1. componentDidUpdate(): called when the state of a component changes. Perfect place to update UI or make network calls based on previous state before update, and current state
========================
import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
        this.removePhoto = this.removePhoto.bind(this);
        console.log('constructor')
    }
    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState(state => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }));
    }
    componentDidMount() {
        const data = simulateFetchFromDatabase();
        this.setState({
            posts: data
        });
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('re-render')
    }
    render() {
        console.log('render');
        return(
            <div>
                <Title title={"PhotoWall"}/>
                <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
            </div>
        )
    }
}
function simulateFetchFromDatabase() {
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
    }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
    }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}
export default Main
*/


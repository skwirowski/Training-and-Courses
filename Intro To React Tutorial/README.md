# Tutorial: Intro to React

## 1. Tic-tac-toe game from [React Tutorial](https://reactjs.org/tutorial/tutorial.html)

### A tic-tac-toe game that:
* Lets you play tic-tac-toe,
* Indicates when a player has won the game,
* Stores a game’s history as a game progresses.

## 2. Ticking clock from [React Tutorial - state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### The clock ticks every second. Let’s quickly recap what’s going on and the order in which the methods are called:
* When `<Clock />` is passed to `ReactDOM.render()`, React calls the `constructor` of the Clock component. Since Clock needs to display the current time, it initializes `this.state` with an object including the current time. We will later update this state,
* React then calls the Clock component’s `render()` method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output,
* When the Clock output is inserted in the DOM, React calls the `componentDidMount()` lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call the component’s `tick()` method once a second,
* Every second the browser calls the `tick()` method. Inside it, the Clock component schedules a UI update by calling `setState()` with an object containing the current time. Thanks to the `setState()` call, React knows the state has changed, and calls the `render()` method again to learn what should be on the screen. This time, `this.state.date` in the `render()` method will be different, and so the render output will include the updated time. React updates the DOM accordingly,
* If the Clock component is ever removed from the DOM, React calls the `componentWillUnmount()` lifecycle hook so the timer is stopped.

## 3. On-off toggle from [React Tutorial - handling events](https://reactjs.org/docs/handling-events.html)

### This `Toggle` component renders a button that lets the user toggle between "ON" and "OFF" states.

## 4. Conditional rendering from [React Tutorial - conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

### In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.
* Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them,
* You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change,
* You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical `&&` operator,
* Another method for conditionally rendering elements inline is to use the JavaScript conditional operator `condition ? true : false`,
* In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return `null` instead of its render output.

---
[My GitHub Profile](https://github.com/skwirowski "Paweł Skwirowski GitHub")



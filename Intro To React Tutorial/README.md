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

---
[My GitHub Profile](https://github.com/skwirowski "Paweł Skwirowski GitHub")



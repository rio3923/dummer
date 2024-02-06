# Understanding React Hooks in easy way

Hooks in React are a powerful feature that enables functional components to manage state and other React features. They were introduced to simplify the management and reusability of stateful logic in functional components.

## What is State in React?

In React, state represents information in your app that can change over time. When the state changes, it can affect what is displayed on the screen. For example, in a counter app, the count value is part of the state. When you press a button to increase or decrease the count, you're causing a change in the state, and React automatically updates the display to reflect the new count.

## Key React Hooks

### useState

The `useState` hook allows functional components to manage state. You can use it to declare state variables and their associated updater functions, making it easy to handle and update state within functional components.

```javascript
const [counter, setCounter] = useState(0);

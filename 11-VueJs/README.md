# Basics of Vue.js

This project is a simple demonstration of basic Vue.js concepts and compares them with similar concepts in React.

## Table of Contents

- [Introduction](#introduction)
- [Vue.js Basics](#vuejs-basics)
  - [Template and Data Binding](#template-and-data-binding)
  - [Event Handling](#event-handling)
  - [Conditional Rendering](#conditional-rendering)
  - [State Management](#state-management)
  - [Methods](#methods)
  - [Two-Way Data Binding](#two-way-data-binding)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository is aimed at helping developers understand the basics of Vue.js by providing clear examples of how Vue.js handles common front-end development tasks such as data binding, event handling, and state management. It also includes comparisons to React for those familiar with React.

## Vue.js Basics

### 1. Template and Data Binding

**Vue.js:**

- In Vue, the HTML inside an element with `id="app"` is managed by Vue and is called a template.
- Vue uses `{{ }}` for data binding, allowing you to display data from the Vue instance in your HTML.
- **Example:** `{{title}}`, `{{author}}`, and `{{age}}` display corresponding values from the Vue instance's data in the HTML.

**React:**

- React uses JSX, which allows you to write HTML-like syntax directly in JavaScript.
- Data binding in React is done using `{}`.
- **Example:** `{title}`, `{author}`, and `{age}` display values from state or props.

### 2. Event Handling

**Vue.js:**

- Event handling is done using `v-on` or the shorthand `@` followed by the event name.
- **Example:** `v-on:click="age++"` or `@click="age++"` handles the `click` event and increments the `age` value.

**React:**

- Event handling in React uses camelCase syntax within JSX.
- **Example:** `onClick={() => setAge(age + 1)}` handles the `click` event and increments the `age` value.

### 3. Conditional Rendering

**Vue.js:**

- Vue uses `v-if` and `v-else` for conditional rendering.
- **Example:** `<div v-if="showTitle">` will only render the div if `showTitle` is true.
- Vue also has `v-show` for controlling visibility, which renders the element in the DOM but hides it based on the condition.

**React:**

- React uses ternary operators or logical `&&` for conditional rendering.
- **Example:** `{showTitle && <div>Title is shown</div>}` renders the div only if `showTitle` is true.

### 4. State Management

**Vue.js:**

- In Vue, data is defined in the `data` function of a Vue component.
- **Example:** `data() { return { age: 0 } }` initializes `age` with `0`.

**React:**

- React manages state with hooks like `useState`.
- **Example:** `const [age, setAge] = useState(0)` initializes `age` with `0` and provides a `setAge` function to update it.

### 5. Methods

**Vue.js:**

- Methods in Vue are defined in the `methods` object.
- **Example:** `methods: { changeTitle(newTitle) { this.title = newTitle } }` defines a method to change the `title`.

**React:**

- In React, methods are regular functions defined within or outside the component, and are called within JSX as needed.

### 6. Two-Way Data Binding

**Vue.js:**

- Vue supports two-way data binding using `v-model`, which automatically binds form inputs to data properties.
- **Example:** `<input v-model="title">` binds the `title` property to the input field.

**React:**

- React does not have built-in two-way data binding. You need to handle state updates and event handlers explicitly to update input values.
- **Example:** `<input value={title} onChange={e => setTitle(e.target.value)}>`

## Getting Started

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/learning-vue.git
   cd learning-vue
   ```

2. **Open the `index.html` file:**
   Simply open `index.html` in your browser to see the Vue.js application in action.

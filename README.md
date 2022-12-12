# React Crash Course

## Index

[Lecture 0](#lecture-0)

[Lecture 1](#lecture-1)

---
## React is a JS library or framework
---

Use to build ```user interfaces```

Created and maintained by ```Facebook```

Strictly ```frontend``` (runs on client) vs PHP which runs on server and servers html to client

React creates ```single page applications``` (SPA),
compiled to a JS bundle and run on client

Since strictly frontend, React can be linked to backend via:

```
MERN stack: 

MongoDB [database]
express.js [backend framework]
React.js [frontend framework]
Node.js [runtime]
```
```
React on front
Laravel on back
```

---
## Library vs Framework
---

Comparable to Vue.js

React uses packages to act like a framework

A framework puts a ```frame``` on what you can do

You have to follow its ```rules```

Components in a library can be called when needed

Serve JSON from server, then use React to manage that data on frontend

Test each framework, adapt to frameworks used professionnally

---
## Why React ?

### Structure the view layer of your application

```MVC``` or model view controller is a popular design pattern for sorftware

- Model deals with data

- Controller deals with requests and routing

- View is the UI, the user interface

```
React is the V in MVC
```

### Limit error using reusable components

You can use React to build user interfaces with ```reusable components```

This reduces the amount of possible error since it creates coding conventions

### Use JSX (JavaScript Syntax Extension) or dynamic HTML

Write formatted JS in the form of ```dynamic HTML```

### Have very interactive interfaces (DOM)

Update the ```DOM``` dynamically (AJAX?) for faster and more dynamic experience

### Testing benefits
### Popular, in-demand, and ease to use in teams

---
## Components

```
When using React/Vue, think of your UI as a bunch of separate components
```

### Create a component

You can use both ```classes``` and ```functions```

```
More common way: functions with hooks
```

### State

Components are dynamic: they contain ```state```

Example: dropdown menus have an open and closed state

### Hooks

```Hooks``` are functions that let us "hook into a state"

The more common:

```useState```: return a value and an update function

```useEffect```: make HTTP requests (like AJAX)

---
## Learning React

```
1. Build the user interface
2. Implement a JSON server: kind of fake backend to see how React would work in a fullstack environment
```

### Start React app

Use CLI to set up a ```boilerplate``` with all the folders, files and assets

1. Access ```npm``` via NODE.js (download and install)
2. Install React dev tools to see all components, props and states

```Bash
npm --version

npx create-react-app name-of-app

cd name-of-app

code . // to open with VS code
```

```Important```: this approach installs many libraries on the hard disk, for production purposes

It is possible to do the same via CDN-fetched [libraries](https://reactjs.org/docs/cdn-links.html)

```Bash
npm start (on VS terminal)
```

React ```injects components``` into a very basic html.index file via a div with id ```root```

It does it through a function run within that div

```Javascript
function App() {
  return (
    <div className="App">
      <h1>Hello from React</h1>
      <h2>Hello</h2>
  </div>
  );
}

export default App;
```

```
State should be at the top level or App level

State gets passed down

Actions get passed up
```
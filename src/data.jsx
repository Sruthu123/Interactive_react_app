
export const CORE_CONCEPTS = [
  {
    title: 'Components',
    description:
      `In React, a component is a JavaScript function</div> or class that optionally accepts inputs (known as "props") and returns a React element that describes how a section of the UI should appear. Components are the building blocks of React applications. Components allow for modular,reusable UI elements and make it easier to manage and update the user interface.


Components in React can be classified into two types:


Functional Components:
----------------------------

These are simple functions that return JSX. They are the modern and preferred way to create components in React.

Class Components:
----------------------

These are ES6 classes that extend from React.Component and have lifecycle methods and the ability to hold state.

Key Concepts:
-----------------

Reusability: Components can be reused across different parts of the application.

Separation of Concerns: Each component typically handles a specific part of the UI and its logic.`,
  },
  {
    title: 'JSX',
    description:
      `JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes writing React components easier and more intuitive by letting developers use familiar HTML syntax in a JavaScript environment.

Key Concepts:
-----------------

HTML-like Syntax: JSX looks similar to HTML, but it gets compiled into JavaScript by React. This syntax makes components more readable and easier to write.

Embedding Expressions: In JSX, JavaScript expressions can be embedded inside curly braces{}, allowing dynamic rendering of content.

Attributes: JSX uses className instead of class and htmlFor instead of for, among other differences, due to JavaScript naming conventions.`,
  },
  {
    title: 'Props',
    description:
      `Props are short for "properties" and are used to pass data from a parent component to a child component. They allow components to be dynamic, reusable, and adaptable by receiving external data.

Key Concepts:
-----------------

Passing Data: Props allow components to receive data from their parent components, making it easier to customize their behavior and appearance.

Read-Only: Props are immutable; meaning a child component cannot change the props it receives from its parent.

Default Props: If no prop is provided by the parent, components can define default props.

Prop Types: React allows you to define the expected types of props using libraries like PropTypes, ensuring that components receive the correct data type.`,
  },
  {
    title: 'State',
    description:
      `State is a way to store data that can change over time and is local to a particular component. Unlike props, state can be modified within the component, and changes to state trigger re-renders of the component.

Key Concepts:
-----------------

Mutable: State is mutable, meaning it can change over time. This makes it ideal for tracking user interactions, input values, or any data that needs to update the UI.

State vs. Props: While props are used to pass data from parent to child and are read-only, state is used to manage data within a component and can be updated by the component itself.

Reactivity: When the state of a component changes, React triggers a re-render to update the user interface to reflect the latest state.

Hooks: In modern React, the useState hook allows functional components to have state management without needing to convert to class components.`,
  },
];




export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'A component in React is a building block of the user interface. Components can be functional or class-based. Here`s an example using both:',
    code: `
Functional Component Example:
----------------------------

import React from 'react';

const Welcome = () => {
  return <h1>Hello, welcome to React!</h1>;
};

export default Welcome;
    

Class-Based Component Example:
-----------------------------

import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, welcome to React!</h1>;
  }
}

export default Welcome;
`,
  },
  props: {
    title: 'Props',
    description:
      'Props are used to pass data from one component to another. Props are read-only and allow components to be dynamic and reusable.',
    code: `
Parent component
----------------
import React from 'react';

const App = () => {
  return <Greeting name="John" age={30} />;
};

export default App;

Child component
---------------
import React from 'react';

const Greeting = (props) => {
  return <p>Hello, my name is {props.name} and I am {props.age} years old.</p>;
};

export default App;
`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX (JavaScript XML) is a syntax extension for JavaScript, which allows you to write HTML-like code inside JavaScript. JSX is then compiled to React.createElement() calls by Babel.',
    code: `
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is an example of JSX in React.</p>
    </div>
  );
};

export default App;
`,
  },
  state: {
    title: 'State',
    description:
      'State is used to create and manage data within a component. State can be changed over time, typically in response to user actions or events. When state changes, the component re-renders.',
    code: `
Example of State (Using Functional Component with useState):
-----------------------------------------------------------

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;

Example of State (Using Class-Based Component):
----------------------------------------------

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; 
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

`,
  },
};


  

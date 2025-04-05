# Namaste React Notes for Revision 


**Parcel Functions**

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm (written in C++)
- Caching - Faster Builds
- Image Optimization
- Minification of files for production 
- Bundling
- Compressing of files
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers also
- Diagnostics - Showcasing detailed error in terminal
- Error Handling
- HTTPs
- Tree Shaking Algorithm - Remove unused codes from code base
- Different Dev and Prod bundles

**Note --> Any Code that can be automatically generated SHOULD NOT be pushed to GitHub**

# Episode-02 | Igniting our App 

- Important Git Commands ---> git add . ---> git commit -m "Commit Message" ---> git push origin main

# Episode-03 | Laying the foundation

- Instead of writing commands multiple times in terminal for build, we can write scripts in package.json in scripts node to start our project and build for dev and prod builds

-  To start the project in Dev mode --> npx parcel index.html => npm run start => npm start

- To make the prod build --> npx parcel build index.html ==> npm run build

- How React.createElement Works?

- React.createElement ==> JS Object ==> after rendering HTML Element

- JSX (is not HTML in JavaSript, it is HTML like or XML like syntax) => JavaScript syntax using which it is easier to create HTML Element

**Note --> React and JSX are two different things**

- JSX (transpiled before it reached the JS Engine) -- Done by PARCEL -- actually done by Babel (a JavaScript Compiler)

- How JSX Works?

- JSX => React.createElement => ReactElement - JS Object => after rendering HTML Element

- Babel is converting JSX to React.createElement

 **PRO TIP --> Read about the Documentation of any New Language or whatever else which you are learning**

- Attributes to JSX are given using **Camel Case**(Ex: phoneNumber, createElement)

- JSX written in multiple lines needs to be wrapped in brackets () for Babel to understand the start and end point of the JSX code (Not mandatory for Single line JSX Code)

- What is React Component ?

- In React, components are the building blocks of the user interface. They are reusable, independent pieces of UI that manage their own state and behavior

1- Class Based Components (OLD Method)

2- Functional Components (NEW Method)

- What is React Functional Component?

- Just a JavaScript Function
(These are simple JavaScript functions that return JSX (UI elements))
**Note - Any React Component Name should start with CAPITAL LETTER**

- A JavaScript Function which returns a React Element is called **Functional Component**

- What is Class Based Components ?

- These are ES6 class-based components that extend React.Component and use the render() method to return JSX.


- What is Component Composition in React?

- Component inside a component. (Component Composition is a technique in React where you combine multiple smaller components to build complex UIs)

- Any JavaScript Code can be written inside the JSX (JavaScript XML) (i.e inside () )

- React Element and React Components can be inserted in each other using curly braces {} inside JSX

- Any piece of JavaScript code should not be called before initialization

- JSX prevents Cross-Site Scripting (XSS) attacks by sanitizing any dynamic content inside {} before inserting it into the DOM. This prevents malicious scripts from running

# Episode - 04 | Talk is Cheap, Show Me the Code

- For Front End Development **Wireframe** is the first and foremost important thing

- Inline CSS is given as a JavaScript Object
-For Example : const styleCard = {backgroundColor: "yellow"}

- What is Props (Properties) in React ?

- Props (short for "Properties") in React are used to pass data from a parent component to a child component. They make components reusable and dynamic. Props are read-only and cannot be modified inside the child component

- **Passing  a Prop to a component is just like passing an argument to a function**

- For Dynamic Data Population we are going to use Props in a component

- What is Config Driven UI ?

- Controlling UI using the Data or Config which comes from Backend is called Config Driven UI

 - What is Optional Chaining in React ?

 - Optional Chaining (?.) is a JavaScript ES11 (ECMAScript 2020) feature that helps safely access deeply nested object properties without causing errors if a property is null or undefined

- Where to Use Optional Chaining in React?

-  API responses (data?.property)
- Props (props?.value)
- State variables (state?.key)
- Arrays (array?.[0]?.property)
- Event handlers (event?.target?.value)

- Why is the key Prop Necessary in .map()?

- React uses keys to identify which elements have changed, been added, or removed.

- Without keys, React re-renders the entire list, leading to performance issues.

- With keys, React can efficiently update only the changed items, improving performance. 

- **Writing a key is necessary while using the map function for performance optimisation of the code**

- **Never use Index as a Key inside map function**

# Episode-05 | Let's Get Hooked

- The beauty of using a framework or a library is to make developer experience easy. To write less code and do more on the web page

- The best industry practice is to make separate files for separate components instead of writing the whole code in a single file

- *Note ---> Before importing a component, we need to export that component in the component.js file. For Example - (export default ***Component***;)

- Best Industry Practices - Never put any Hard coded data (String) in the components Folder. They should be put inside utilities (utils)

- **A single module or component.js file cannot have multiple default exports. For this purpose comes Named Export. Example - export const Header = () => {return <h1>Welcome to TummyKart!</h1>;};**


- Types of Imports and Exports in React 


-  Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import - Used for Exporting multiple things from the same file. Named Export is imported by writing inside the curly braces ({ }).
**For Example - import { Header, Footer } from "./components/Header";**

- export const Component;
import {Component} from "path";

- Best practice is to use default export unless there are multiple components needed to be exported.

- **Ques** - Can I use a default export along with a named export?
For example- 

export const Header=()=>{return()};

export default Header;

- 📌 Exporting in Same File:

const Header = () => <h1>Welcome!</h1>;

- export { Header };  // Named export
- export default Header; // Default export

- 📌 Importing in Another File:

- import Header, { Header as NamedHeader } from "./components/Header";

- **Why React is Fast ?** 
- React is Fast and Efficient in DOM Manipulation to maintain Data and UI layer to be consistent with each other.

- State Variable ? - Super Powerful Variable - with the use of React Hooks(which is a normal JS function which is prebuilt)

- React Hooks ?

- Normal JS utility function 
- Two important React Hooks 
- useEffect()
- useState() -  Used to generate Superpowerful State Variables in react. Needs to be imported before use inside a component like (import {useState} from "react";).
Why is it called a State Variable ? - because it maintains the state of component.
- How to create a State Variable ?

- const [variableName, setvariableName] = useState(ValueTobePassed);

- useState() returns an Array.We can also write the above code like below (Array Destructuring) -

- const arr = useState(ValueTobePassed);

- const variableName = arr[0];

- const setvariableName = arr[1];

- **Whenever a StateVariable updates, React re-renders the components.**

- Reconciliation Algorithm (React Fiber) - Reconciliation is the process React uses to efficiently update the Actual DOM by comparing the new Virtual DOM with the previous Virtual DOM and applying only the necessary changes. ***For more Details - https://github.com/acdlite/react-fiber-architecture ***

- Diffing Algorithm - When the state changes, React compares the new Virtual DOM with the previous one.

- Actual DOM vs Virtual DOM in React

- 1️⃣ What is the Actual DOM?

- The Actual DOM (Document Object Model) is the standard representation of the UI elements in the browser.

- Manipulating the Actual DOM is slow because every change requires the browser to repaint and reflow the page.

- Example: If you update a single item in a list, the browser re-renders the entire list instead of just updating that one item.

- 📌 Limitations of the Actual DOM:

- Slow updates due to re-rendering the entire page.

- Performance issues in large applications.

- Increased memory usage.

- 2️⃣ What is the Virtual DOM?

- The Virtual DOM (VDOM) is a lightweight copy of the Actual DOM that React keeps in memory.

- 📌 How Virtual DOM Works:

- React creates a virtual representation of the UI in memory.

- When the state changes, React compares the new Virtual DOM with the previous one (using a process called "diffing").

- React updates only the changed parts of the Actual DOM instead of re-rendering everything.

- 🚀 Advantages of Virtual DOM:
- ✅ Faster updates – React only updates necessary parts of the UI.
- ✅ Efficient rendering – Uses "reconciliation" to apply minimal changes.
- ✅ Better performance – Reduces the number of direct updates to the Actual DOM.

- **React uses the Virtual DOM (VDOM) to improve performance by minimizing direct interactions with the Actual DOM.**



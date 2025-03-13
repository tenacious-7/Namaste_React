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


# Episode - 03 

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

- 



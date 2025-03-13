import React from "react";
import ReactDOM from "react-dom/client";


// JSX
const jsxHeading = <h1 id ="heading">This is Namaste React Course by JSX header</h1>;

const rootdiv = ReactDOM.createRoot(document.getElementById("rootdiv"));

rootdiv.render(jsxHeading);

// Component Composition 

const FirstComponent = () => {
    return (<h1 id ="heading">Namaste React First Functional Component</h1>);
};

const SecondComponent = () => {
    return(
   <div>
    <FirstComponent/> 
    <h2 id = "heading">Namaste React Second Component</h2>
    <FirstComponent/>
   </div>

);
};

rootdiv.render(<SecondComponent/>);


    // Hello World Code Using JavaScript
    // const heading = document.createElement("h1");
    // const root = document.getElementById("rootdiv");
    // heading.innerHTML = "Hello World from JavaScript !"
    // root.appendChild(heading);


    // Hello World Code using React 
    // const heading = React.createElement("h1",{id: "heading"},"Hello World from React JS");
    // const rootdiv = ReactDOM.createRoot(document.getElementById("rootdiv"));
    // rootdiv.render(heading);    

    // console.log(heading); // Gives an Object  (React Element is JavaScript Object )

    // Creating Nested div's and headers using React
    // <div id= parent>
    //     <div id = child1>
    //         <h1> Hey this is an h1 tag</h1>
    //         <h2> Hey this is an h2 tag</h2>
    //     </div>
    //     <div id = child2>
    //         <h1> Hey this is an h1 tag</h1>
    //         <h2> Hey this is an h2 tag</h2>
    //     </div>
    // </div>

    // ***Note ---> Always keep the source code of whatever library you are importing before the source 
    // code of the place where you have implemented that library.

    // React Element is JavaScript Object 

    const heading2 = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"Hey this is an h1 tag"),React.createElement("h2",{},"Hey this is an h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am an h1 tag")],React.createElement("h2",{},"I am an h2 tag"))]);
    const rootdiv = ReactDOM.createRoot(document.getElementById("rootdiv"));
    rootdiv.render(heading2);
    
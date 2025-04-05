import React from "react";
import ReactDom from "react-dom/client";
import Body from "./components/Body"
import Header from "./components/Header";

const AppLayout = () =>
{
return (
<div className="app">
<Header/>
<Body/>
</div>
)
};

const rootdiv = ReactDom.createRoot(document.getElementById("rootdiv"));

rootdiv.render(<AppLayout/>)
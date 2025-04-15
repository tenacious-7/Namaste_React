import React from "react";
import ReactDom from "react-dom/client";
import Body from "./components/Body"
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantItems from "./components/RestaurantItems";
const AppLayout = () =>
{
return (
<div className="app">
<Header/>
<Outlet/>
</div>

)};

const appRouter = createBrowserRouter([
{
    path: "/",
    element: <AppLayout/>,
    children:[
    {
            path:"/",
            element:<Body/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element: <Contact/>
    }],
    errorElement:<Error/>
},
{
    path:"/about",
    element:<About/>
},
{
    path:"/contact",
    element: <Contact/>
},
{
    path:"/restaurants/:resid",
    element: <RestaurantItems/>
}
]);


const rootdiv = ReactDom.createRoot(document.getElementById("rootdiv"));

rootdiv.render(<RouterProvider router={appRouter}/>)
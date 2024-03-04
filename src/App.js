import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restuarentmenu from "./components/Restuarentmenu";

const Applayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            
        </div>
    )
};

const Approuter = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/resturant/:resId",
                element: <Restuarentmenu/>
            }
        ],
        errorElement:<Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ Approuter } />)




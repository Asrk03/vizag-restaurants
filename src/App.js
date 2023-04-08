import React, { Children, Profiler } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppLayout = ()=>{
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement : <Error/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurant/:restaurantId",
                element:<RestaurantMenu/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body.js"
//import About from "./components/about.js";
import Contact from "./components/contact.js";
import Error from "./components/error.js";
import RestaurantMenu from "./components/restaurantmenu.js";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
//import Grocery from "./components/grocery.js";


const Grocery = lazy(()=>import("./components/grocery.js"));
const About = lazy(()=>import("./components/about.js"));

const Applayout = () =>{
    return (
        <div className = "App">
            <Header />
            <Outlet />
        </div>
    )
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        children:[
            {
            path:"/",
            element:<Body />,
        },
        {
            path:"/about",
            element:(
            <Suspense fallback =  {<h1>Loading...</h1>}><About /></Suspense>),
        },
        {
            path:"/contact",
            element:<Contact />,
        },
        {
            path:"/grocery",
            element:(
                <Suspense fallback =  {<h1>Loading...</h1>}><Grocery /></Suspense>),
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu />,
        }
    ],
    errorElement:<Error />
}
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);


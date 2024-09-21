import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
//import About from "./components/about.js";
import Contact from "./components/contact.js";
import Error from "./components/error.js";
import RestaurantMenu from "./components/restaurantmenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/userContext.js";
//import Grocery from "./components/grocery.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/cart.js";
import BelowheaderElement from "./components/belowHeaderElement.js";

const Grocery = lazy(() => import("./components/grocery.js"));
const About = lazy(() => import("./components/about.js"));

const Applayout = () => {
  const [userName, setUserName] = useState(""); // Initialize as an empty string or null

  useEffect(() => {
    const data = {
      name: "Abhishek",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <BelowheaderElement />
            <Body />
          </>
        ), 
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

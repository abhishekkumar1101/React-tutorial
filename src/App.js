import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body.js"


const ApplayOut = () =>{
    return (
        <div className = "App">
            <Header />
            <Body />
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplayOut />);


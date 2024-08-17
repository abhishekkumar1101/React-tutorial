// const heading = React.createElement("h1",{id:"heading"},"hello world from react");

// const Parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{},"i am a h1 tag")
//     )); 
    const Parent = React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
           [React.createElement("h1",{},"i am a h1 tag"),
                React.createElement("h4",{},"i am a h2 tag")])
                
        );
    const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(Parent);
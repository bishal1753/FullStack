console.log("This is index.js");

const Myh1 = () =>{
    return React.createElement("h1", {}, "This is from REACT H1")
}

const App = () =>{
    return React.createElement("App", {}, [Myh1(), Myh1(), Myh1()])
}
ReactDOM.render(App(), document.querySelector("#root"))
const domContainer = document.querySelector("#root");

const myElement = React.createElement("div",null,[
    React.createElement("p",null,"Hello BD"),
    React.createElement("p",null,"Hello BD")])

ReactDOM.render(myElement, domContainer);
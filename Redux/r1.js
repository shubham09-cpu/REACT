import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import store from "./Store";
import Counting from "./counting";
import Customecounter from "./customercounter";

function App(){
    return(
        <>
        <Provider store={store}>
        <Counting></Counting>
        <br></br>
        <br></br>
        <br></br>
        <Customecounter></Customecounter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

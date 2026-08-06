import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import { Card } from "./card";
import {Provider} from "react-redux";
import store from "./store";

function App(){
    return(
    <Provider store={store}>
    <Header></Header>
    <Card></Card>
    </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
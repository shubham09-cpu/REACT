import React from "react";
import ReactDOM from "react-dom/client";
import {useSelector} from "react-redux"

export default function Header(){
    const count=useSelector((state)=>state.slice2.count);
    return(
        <div style={{display:"flex",justifyContent:"centre",gap:"50px"}}>
        <h1>Swiggy</h1>
        <h2>Cart:({count})</h2>
        </div>
    )
}
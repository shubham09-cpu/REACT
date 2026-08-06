import { useState } from "react";
import { useDispatch } from "react-redux";
import { Increment,Decrement,Reset,CustomIncreser} from "./Slicer1";

export default function Customecounter(){

    const[number,setNumber]=useState("");
    const dispatch=useDispatch();

    function handClick(){
        dispatch(CustomIncreser(Number(number)));
        setNumber(" ");
    }

    return(
        <>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={handClick}>Submit</button>
        </>
    )
}
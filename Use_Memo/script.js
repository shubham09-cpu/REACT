import React ,{useState,useEffect, useCallback,useMemo}from "react";
import ReactDOM from 'react-dom/client';

function App(){

    const[count,setCount]=useState(0);
    const[number,setNumber]=useState("");
    const[result,setResult]=useState("");

    const fibonnaci=useCallback((n)=>{ // Expensive Calculation because its time complexity is very high.
        if(n<=1){
            return n;
        }
        return fibonnaci(n-1)+fibonnaci(n-2);
    },[]);

    const result=useMemo(()=>fibonnaci(number),[number]);
    // useEffect(()=>{
    //     setResult(fibonnaci(number));
    // });



    return(
        <>
        <h1>Counter is : {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <div>
            <h2>Fibonnaci Number is :{result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
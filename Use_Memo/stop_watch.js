import React ,{useState,useEffect, useCallback,useMemo, useRef}from "react";
import ReactDOM from 'react-dom/client';

function StopWatch(){

    const[time,setTime]=useState(0);
    const intrvalRef=useRef(null);
    const[isrunning,setIsRunnig]=useState(false);

    function start(){
        if(!isrunning){
        intrvalRef.current=setInterval(()=>{
            setTime((prevTime)=>prevTime+1);
        },1000)
        setIsRunnig(true);
    }
    }

    function stop(){
        if(isrunning){
        clearInterval(intrvalRef.current);
        intrvalRef.current=null;
        setIsRunnig(false);
        }
    }

    function reset(){
        clearInterval(intrvalRef.current);
        intrvalRef.current=null;
        setTime(0); 
    }

    return(
        <>
        <div id="stop">
        <h1>StopWatch is : {time}</h1>
        <button onClick={start}>Start</button>
        <br></br>
        <br></br>
        <button onClick={stop}>Stop</button>
        <br></br>
        <br></br>
        <button onClick={reset}>Reset</button>
        </div>
        </>
    )

}

ReactDOM.createRoot(document.getElementById("root")).render(<StopWatch/>);
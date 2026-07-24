import React ,{useState} from "react"
import ReactDOM from 'react-dom/client'

// function Counter(){
//     let [count,setCount]=useState(0);

//     function incrementnumber(){
//         //count = count + 1;
//         setCount(count+1);
//         //document.querySelector('h1').innerHTML=`Count is : ${count}`;
        
//     }
//     function decrementnumber(){
//         //count=count-1;
//         setCount(count-1);
//        //document.querySelector('h1').innerHTML=`Count is : ${count}`;
//     }
//     return(
//         <div className="first">
//         <h1>Count is : {count}</h1>
//         <button onClick={incrementnumber}>Increment {count}</button>
//         <button onClick={decrementnumber}>Decrement {count}</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);

function Main(){
    const [color,setColor] = useState("black");
    document.body.style.backgroundColor = color;
    return(
        <>
        <h1>Back Ground Color Changer</h1>
        <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);
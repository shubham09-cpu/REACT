import React  from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"Pink"}},"Hello Coder Army");
// const element2 = React.createElement("h2",{id:"first",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"Pink"}},"Mja Aaya Mujhe");

// // ReactDOM.render(element,document.getElementById("root"));
// // ye error dega kyonki ye ek old version ka hai.

// const root = ReactDOM.createRoot(document.getElementById('first'));
// root.render(element);
// root.render(element2);

// // yhan par uper humne do element place kiyee hai lekin yhan sirf ek hie element place hogaa
// // baaki jo phle ke element hongeee react unn saab ko saaf kar degaaa.

// const div1=React.createElement('div',{},[element,element2]);
// root.render(div1);

// Agar Aise kaiin saari properties ko add krnaa ho to humen kaaii saari diffculties hongii issi ko door krne ke liyee
// JSX kaaa use krtee hain.

// JB hum ~react file ko use hain tab humen poora code nhi chaiye hota hai sirf kuch block of code chaiye hota hai uss 
// block of code ko laane ka kaam humara bundler krrta hai.
// yhan par humlog parcel as a bundler use kar rhe hain.

// JSX : javascript XMl

// const newElement = <h1>Hello Coder Army</h1>

// const root = ReactDOM.createRoot(document.getElementById('first'));
// root.render(newElement);

//   babel                    React                        Render
// JSX => React.createElement() => react element(JS Object) => HTMl ELement.
// babel ek transpiler hota hai jo ki jSx ke code ko react men convert krta hai.

// const newElement = <h1>Hello Coder Army</h1>

// const root = ReactDOM.createRoot(document.getElementById('first'));
// root.render(newElement);

// Hum log jsx men js bhi daal skte hain.  jaise ki {javascript} jab bhi agr jsx men {} hai to it means andar js likhi hai.

const name="Shubham";
const obj={
    name:"Shubham",
    age:23,
    salary:46,
}
const x=(
    <>
    <h1>Hello {name}</h1>
    <h2>Kaise ho baaki sab badhiya !</h2>
    <h3>Tumhari salary {obj.salary} hai</h3>
    </>
)

//  React component =>
// function based Component
function greet(){
    return <h1>Aur bhai kaisa hai</h1>
};

const root = ReactDOM.createRoot(document.getElementById('first'));
root.render(greet());



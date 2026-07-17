const element = React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"Pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"first",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"Pink"}},"Mja Aaya Mujhe");

// ReactDOM.render(element,document.getElementById("root"));
// ye error dega kyonki ye ek old version ka hai.

const root = ReactDOM.createRoot(document.getElementById('first'));
root.render(element);
root.render(element2);

// yhan par uper humne do element place kiyee hai lekin yhan sirf ek hie element place hogaa
// baaki jo phle ke element hongeee react unn saab ko saaf kar degaaa.

const div1=React.createElement('div',{},[element,element2]);
root.render(div1);

// Agar Aise kaiin saari properties ko add krnaa ho to humen kaaii saari diffculties hongii issi ko door krne ke liyee
// JSX kaaa use krtee hain.







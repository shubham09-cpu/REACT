// const header1=document.createElement('h1');
// header1.innerText="Hello Coder Army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2=document.createElement('h2');
// header2.innerText="Kaise ho aap sab log";
// header2.style.backgroundColor="black";
// header2.style.fontSize="25px";
// header2.style.color="white";

// const root = document.getElementById("first");
// root.append(header1);
// root.append(header2);

// Agar humen aise kaain saare header bnanae ho to time lgegaaa isliye iss time ko kaam 
// krnee ke liyee hum log ek function bnaengeee.

// const style={fontsize:"30px",backgroundColor:"blue",color:"White"};

// ye function hai jo uper wale ko ek function men create kar diya hai.

const Ract = {

    createElement : function(tag,styles,children)
    {
        const element=document.createElement(tag);

        element.innerText=children;

        for(let key in styles)
        {
            element.style[key]=styles[key];
        }
        return element;
    }
}

const header1=Ract.createElement('h1',{fontsize:"30px",backgroundColor:"blue",color:"White"},"Hello Coder Army");
const header2=Ract.createElement('h2',{fontsize:"25px",backgroundColor:"black",color:"White"},"Kaise ho aap sb log");

const reactdom = {
    render : function(element,root)
    {
        root.append(element);

    }
}

reactdom.render(header1,document.getElementById("first"));
reactdom.render(header2,document.getElementById("first"));

// const root = document.getElementById("first");
// root.append(header1);
// root.append(header2);

// CDN ki wesites men jaaakr do link ko copy krni hai aur unhe html ke code men paste krnan hai frr react chaltaa hai.
// CDN stands for content delivery network
//<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
//<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// ismen se jo uper wali link hai wo react ke liyee jisko android wale aur web-development wale dono use kar skte hain.
// aur neeche wali react dom ke liyee hoti hai ye sirf html ke dom manipulation men kaam aati hai.


import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
    return (
        <div className="card"style={{ border: "2px solid black", padding: "2px" }}>
            <img src={props.image} height="200px" width="200px" />
            <div style={{ textAlign: "center" }}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    );
}

const ans = [
    { cloth: "Shirt",       offer: "10-22% OFF", image: "https://i.pinimg.com/736x/fb/08/34/fb0834895a82675f8c893fd1f83b9f19.jpg" },
    { cloth: "Trousers",    offer: "10-30% OFF", image: "https://i.pinimg.com/736x/54/9b/5d/549b5de639b955634f66e25b4f676620.jpg" },
    { cloth: "Jeans",       offer: "50-70% OFF", image: "https://i.pinimg.com/1200x/27/01/ad/2701adc1e28fc775fc7c4a7b05c0cc43.jpg" },
    { cloth: "Cargos",      offer: "80-95% OFF", image: "https://i.pinimg.com/736x/d6/38/de/d638de6408e12c500a04176deb161b49.jpg" },
    { cloth: "Kurtas",      offer: "20-30% OFF", image: "https://i.pinimg.com/1200x/a1/90/b3/a190b3280ff540284df9a06b0bee3c20.jpg" },
    { cloth: "Patloon",     offer: "70-30% OFF", image: "https://i.pinimg.com/736x/90/b0/a3/90b0a3144cedd9d4d9a41ef751ca05e5.jpg" },
    { cloth: "Saree",       offer: "60-80% OFF", image: "https://i.pinimg.com/1200x/d9/d6/06/d9d606319e90bc5aea93d69e8baf4fa3.jpg" },
    { cloth: "Suit",        offer: "10-20% OFF", image: "https://i.pinimg.com/736x/bb/07/1f/bb071fb96fc9ecf5fa3adf12fbd9bbfa.jpg" },
    { cloth: "Shoes",       offer: "26-32% OFF", image: "https://i.pinimg.com/736x/df/5b/36/df5b36a722e622cf65a3284597f0e13a.jpg" }, 
    { cloth: "Track Pants", offer: "20-30% OFF", image: "https://i.pinimg.com/736x/0c/93/8f/0c938f57d86d5e9a4e7b78c6eda892af.jpg" },
    { cloth: "Accessories", offer: "15-40% OFF", image: "https://i.pinimg.com/736x/c1/1e/78/c11e785363d4d58efa166da9223bdef7.jpg" },
];

function Header(){
    return (
        <div className="heading">
            <img className="logo" src="https://i.pinimg.com/1200x/05/71/89/057189610e860c8a86b4fef2b70d0947.jpg" height="60px" width="60px"/>

            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>

            <input className="search"  placeholder="Search for products brands and more"></input>

            <div className="Profile">
                <button className="pro">Profiles</button>
                <button className="pro">Whillist</button>
                <button className="pro">Bag</button>
            </div>
        </div>
    )

}

function Footer(){
    return(
        <div className="foot">
        <img className="foot_img" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/8/dndfsB1V_65ecb385cb2e4af2b0313364aeae6da8.jpg"/>
        </div>
    )
}

function App() {
    return (<>

        <Header/>
        <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap"}}>
            {ans.map((value, index) => (<Card key={index} cloth={value.cloth} offer={value.offer} image={value.image}/>))}</div>

        <Footer />
                        </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); 
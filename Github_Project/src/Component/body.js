import { useEffect, useState } from "react";

function Body(){
    const[Profile,setProfile]=useState([]);
    const[numberofprofile,setnumberofprofile]=useState("");

    async function generateProfile(count){
        const ran=Math.floor(1+Math.random()*10000);
        try{
        const response=await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data=await response.json();
        setProfile(data);
    }
    catch(error)
    {
        console.log("Data is not Defined");
    }
    }

    useEffect(()=>{
        generateProfile(10);
    },[])

    return(
        <div className="but">
            <input type="text" className="input" placeholder="Search here" value={numberofprofile} onChange={(e)=>setnumberofprofile(e.target.value)}></input>
            <button onClick={()=>{generateProfile(Number(numberofprofile))}}>Search Profile</button>
        <div className="profile">
            {
              Profile.map((val)=>{return(
                    <div key={val.id} className="cards">
                        <img src={val.avatar_url}></img>
                        <h2>{val.login}</h2>
                        <a href={val.html_url} target="_blank">Profile</a>
                    </div>)
                })
            }
        </div>
        </div>
    )
}

export default Body;

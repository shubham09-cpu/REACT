import { useEffect, useState } from "react";

function Body(){
    const[Profile,setProfile]=useState([]);

    async function generateProfile(){
        const response=await fetch("https://api.github.com/users?per_page=10");
        const data=await response.json();

        setProfile(data);
    }

    useEffect(()=>{
        generateProfile();
    },[])

    return(
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
    )
}

export default Body;

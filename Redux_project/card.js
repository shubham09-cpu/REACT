import React, { useState } from "react";
import FoodCart from "./foodcat";

const foodItems=[
    {id:1,food:"Pizza",Price:"200"},
    {id:2,food:"Burger",Price:"800"},
    {id:3,food:"Momos",Price:"900"},
    {id:4,food:"Samosa",Price:"500"},
    {id:5,food:"Chai",Price:"400"},
    {id:6,food:"Roll",Price:"1100"},
    {id:7,food:"Sahi Paneer",Price:"7700"},
    {id:8,food:"Manchurain",Price:"8500"},
    {id:9,food:"Noodles",Price:"2200"},
    {id:10,food:"Pasta",Price:"2300"},
]

export function Card(){
    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px", height:"50px"}}>
            {foodItems.map((value)=>{
                return (
                    <div key={value.id} style={{border:"2px solid black"}}>
                        <FoodCart value={value}></FoodCart>
                    </div>
                )
            })}
        </div>
    )
}
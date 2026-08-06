import {createSlice} from "@reduxjs/toolkit";

const FoodSlicer=createSlice({
    name:"Slice2",
    initialState:{count:0},
    reducers:{
        addItems:(state)=>{state.count++},
        RmoveItems:(state)=>{state.count--}
    }
})

export default FoodSlicer.reducer;
export const{addItems,RmoveItems}=FoodSlicer.actions
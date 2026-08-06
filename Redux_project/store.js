import {configureStore} from "@reduxjs/toolkit";
import CartReduce from "./slice2"

const store=configureStore({
    reducer:{
        slice2:CartReduce,
    }
})

export default store;
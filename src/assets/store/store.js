import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./slices/pokemon";

const store =configureStore({
    reducer:{
        pokemon,
        
    
    }
    
})

export default store;
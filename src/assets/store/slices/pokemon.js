import { createSlice } from "@reduxjs/toolkit";

const pokemon=createSlice({
    name:"pokemon",
    initialState:"",
    reducers:{
        setInputValue:(_state,action)=>action.payload,
          
    },
    

})

export const {setInputValue}=pokemon.actions
export default pokemon.reducer
import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
       addItems:(state,action)=>{
        state.items.push(action.payload);
       },
       removeItems:(state,action)=>{
       const remove=  state.items.findIndex(item => item.id === action.payload);
       if (remove !== -1) {
        state.items.splice(remove, 1);
      }
         
       },
       clearCart:(state)=>{
        state.items=[]
       }
    }
})
export const {addItems,removeItems,clearCart} =cartSlice.actions
export default cartSlice.reducer
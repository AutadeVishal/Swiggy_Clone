import { createSlice } from "@reduxjs/toolkit"


const cartSlice=createSlice({
name: "cart",
initialState :{
    items:[],

},
reducers:{
  /* Reducer Function*/ 
  //invidual actions->
   addItem:(state,action)=>{
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
    const idx = state.items.findIndex(item => item.name === action.payload);
    if (idx !== -1) {
        state.items.splice(idx, 1);
    }
},
    
    clearCart:(state)=>{
        state.items.length=0;
    }
},
}
    

);
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cart: [],
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log("addToCard")

            const existingItem = state.cart.find((item) => item.id === action.payload.id)
            if(existingItem ){ 
                // state.cart = state.cart.map((item) => item.id == action.payload.id ? {...item, qty :  item.qty+1} : item )

                existingItem.qty += 1;
            } else {
            //   state.cart.push(action.payload);  

              state.cart.push({ ...action.payload, qty: 1 });
            }
            
        },

        removeFromCart: (state, action) => {

            console.log("removeFromCart")
           state.cart = state.cart.filter(item => item.id != action.payload.id);
           console.log(state.cart)
        },

        incrementQty: (state, action) => {
            console.log("incrementQty")

           state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty + 1} : item)
        },

        // decrementQty: (state, action) => {
        //     state.cart = state.cart.map((item) => item.id === action.payload.id ? item.qty >= 1 ? {...item, qty : item.qty - 1} : {...item, qty : 0} : item)
        //  }

        decrementQty: (state, action) => {
            console.log("decrementQty")
            
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty - 1} : item)
        }
    }
});
console.log(CartSlice.actions)

export const  {addToCart, removeFromCart, incrementQty, decrementQty} = CartSlice.actions;
export default CartSlice.reducer
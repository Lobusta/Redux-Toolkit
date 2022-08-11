import { createSlice } from '@reduxjs/toolkit';


export interface IcartState{
    cartItems: String[],
    quantity: number
}


const initialState = {
  cartItems: [],
  quantity: 0
};



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: ( state:IcartState , {payload}) =>{
        const existingCartItem = state.cartItems.find(
            (cartItem:any) => cartItem.id === payload.id
          );
        
          if (existingCartItem) {
            console.log("in the existing cart");
            
            state.cartItems = state.cartItems.map((cartItem:any) =>
              cartItem.id === payload.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
          }
          else
            state.cartItems =  [...state.cartItems, { ...payload, quantity: 1 }];
          
        },
    

    clearCart: (state:IcartState=initialState) => {
        state.cartItems = [];
    }
  },

  
});

export const { addtoCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
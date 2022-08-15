import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";




const CartState = (state:RootState)=> state.Cart;

export const CartSelector = createSelector(
    [CartState] , 
    (cart) => cart.cartItems
)


const ShopState = (state:RootState) => state.Shop;


export const ShopSelector = createSelector(
    [ShopState] , 
    (shop) => shop.shopItems
    
)



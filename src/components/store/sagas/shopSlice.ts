
import { createSlice } from '@reduxjs/toolkit';


export interface IshopState{
    shopItems: String[],
}


const initialState = {
  shopItems: [],
};



const shopSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getShop: (state:IshopState, {payload}) => {
        state.shopItems = payload;
    }
  },

  
});

export const { getShop } =
  shopSlice.actions;

export default shopSlice.reducer;




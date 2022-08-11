import cartReducer from "./reducers/cartSlice"
import shopReducer from "./sagas/shopSlice"


export const rootReducer = ({
    Cart: cartReducer,
    Shop: shopReducer
})
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addtoCart,
  IcartState,
  clearCart,
} from "./components/store/reducers/cartSlice";
import { IshopState } from "./components/store/sagas/shopSlice";
import { RootState } from "./components/store/store";

function App() {
  const dispatch = useDispatch();

  const cartItems = useSelector<RootState, IcartState[]>(
    (state) => state.Cart.cartItems
  );
  const shopItems = useSelector<RootState, IshopState[]>(
    (state) => state.Shop.shopItems
  );

  useEffect(() => {
    dispatch({ type: "FETCH_DATA_SAGA" });
  }, []);

  {
    const AddItem = (uname: Object) => {
      dispatch(addtoCart(uname));
    };

    return (
      <>
        <div>
          <ul>
            {shopItems &&
              Object.values(shopItems).map((user: any) => {
                return (
                  <>
                    <li key={user.id}>{user.name}</li>
                    <button key={user.company} onClick={() => AddItem(user)}>
                      Add to Cart
                    </button>
                  </>
                );
              })}
          </ul>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

          <ul>
            {cartItems &&
              Object.values(cartItems).map((item: any) => {
                return (
                  <li key={item.email}>
                    {item.name}
                    {`         x`} {item.quantity}
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;

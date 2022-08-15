import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addtoCart, clearCart } from "./store/reducers/cartSlice";
import { CartSelector, ShopSelector } from "./store/selectors";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(CartSelector);
  const shopItems = useSelector(ShopSelector);

  useEffect(() => {
    dispatch({ type: "FETCH_DATA_SAGA" });
  }, [dispatch]);

  return (
    <>
      <div>
        <ul>
          {shopItems &&
            Object.values(shopItems).map((user: any) => {
              return (
                <>
                  <li key={user.id}>{user.name}</li>
                  <button
                    key={user.company}
                    onClick={() => dispatch(addtoCart(user))}
                  >
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

export default App;

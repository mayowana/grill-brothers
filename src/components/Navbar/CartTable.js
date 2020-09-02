import React, { useEffect } from "react";
import styles from "./CartTable.module.scss";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartTable = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);

  const removeFromCart = (meals) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== meals.id);
    //setCart(hardCopy);
  };

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    //setCartTotal(totalVal);
  };

  const orders = cart.map((el) => (
    <CartItem
      key={el.id}
      meal={el.name}
      price={el.price}
      clicked={() => removeFromCart(el)}
    ></CartItem>
  ));

  return (
    <>
      <div className={styles.carttable}>
        {cart.length == 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
          <div className={styles.headings}>
                <h4 className={styles.name}>Meal</h4>
                <h4 className={styles.price}>Price</h4>
                <div></div>
                </div>
            {orders}
        </div>
        )}
      </div>
    </>
  );
};

export default CartTable;

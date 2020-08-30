import React from "react";
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

  const orders = cart.map((meals) => (
    <CartItem
      key={meals.id}
      meal={meals.name}
      price={meals.price}
      clicked={() => removeFromCart(meals)}
    ></CartItem>
  ));

  return (
    <>
      <div className={styles.carttable}>
        {cart.length == 0 ? <p>Your cart is empty</p> : <p>orders</p>}
      </div>
    </>
  );
};

export default CartTable;

import React, { useState, useEffect } from "react";
import styles from "./CartTable.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import {removeFromCartAction} from '../../redux/actions/cartActions'

const CartTable = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const cartTotal = useSelector((state) => state.cartReducer.cartTotal);
  

  const dispatch = useDispatch();

  const removeFromCart = (meals) => {
    dispatch(removeFromCartAction(meals, cart));
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
            <div className={styles.total}><h4>Total:</h4> <h4>₦{cartTotal}</h4></div>
            <div className={styles.checkout}><button>PROCEED TO CHECKOUT</button></div>
        </div>
        )}
        </div>
    </>
  );
};

export default CartTable;

import React from "react";
import styles from "./CartItem.module.scss";
import { TiDelete } from "react-icons/ti";

const CartItem = ({ meal, price, clicked }) => (
  <>
    <div className={styles.cartitem}>
      <p className={styles.name}>{meal}</p>
      <p className={styles.price}>{price}</p>
      <TiDelete className={styles.close} onClick={clicked} />
    </div>
  </>
);

export default CartItem;

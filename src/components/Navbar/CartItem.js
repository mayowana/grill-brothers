import React from 'react';
import styles from './CartItem.module.scss'

const CartItem = (meal, price) => (
    <>
        <div className ={styles.cartitem}>
            <p>{meal}</p>
            <p>{price}</p>
        </div>
    </>
);

export default CartItem;
import React from 'react';
import styles from './CartItem.module.scss'
import {TiDelete } from 'react-icons'

const CartItem = (meal, price) => (
    <>
        <div className ={styles.cartitem}>
            <p>{meal}</p>
            <p>{price}</p>
            <TiDelete />
        </div>
    </>
);

export default CartItem;
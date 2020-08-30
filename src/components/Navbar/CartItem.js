import React from 'react';
import styles from './CartItem.module.scss'
import {TiDelete } from 'react-icons/ti'

const CartItem = (meal, price, clicked) => (
    <>
        <div className ={styles.cartitem}>
            <p>{meal}</p>
            <p>{price}</p>
            <TiDelete onClick={clicked}/>
        </div>
    </>
);

export default CartItem;
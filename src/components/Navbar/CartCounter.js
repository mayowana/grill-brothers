import React from 'react';
import styles from './CartIcon.module.scss';
import {useSelector} from 'react-redux'

const CartCounter = () => {
    const cart = useSelector((state) => state.cartReducer.cart);
    
    return (
    <span className ={styles.alert}>{cart.length}</span>
)};

export default CartCounter;
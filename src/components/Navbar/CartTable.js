import React from 'react';
import styles from './CartTable.module.scss'
import {useSelector} from 'react-redux'
import CartItem from './CartItem'

const CartTable = () => {
const cart = useSelector(state => state.cartReducer.cart)
console.log(cart);

const orders = cart.map((meals) => (<CartItem meal={meals.name} key={meals.id} price={meals.price}></CartItem>))

    return (
        <>
            <div className={styles.carttable}>
                {cart.length == 0 ? <p>Your cart is empty</p> : <p>orders</p>}
            </div>
        </>
    );
}

export default CartTable;
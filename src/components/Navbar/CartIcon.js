import React from 'react';
import CartCounter from './CartCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartIcon.module.scss';

const CartIcon = ({ onClickValue }) => {

    function handleClick(e) {
        onClickValue(e.target.name);
      } 

    return (<div>
        <FontAwesomeIcon className={styles.fashoppingcart} icon="shopping-cart" onClick={handleClick}></FontAwesomeIcon> <CartCounter />
    </div>);
}

export default CartIcon;
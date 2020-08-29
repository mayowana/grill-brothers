import React from 'react';
import styles from './MenuItem.module.scss'

const MenuItem = ({image, name, price, clicked}) => {

    return (
        <>
        <div className={styles.menuitem}>
            <img src={image} alt={name}></img>
            <div className={styles.details}>
                <div><h4>{name}</h4>
                <p>₦{price}</p>
                </div>
                <button onClick={clicked}>ADD TO CART</button>
            </div>
        </div>
        </>
    );
};

export default MenuItem;
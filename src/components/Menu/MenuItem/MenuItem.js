import React from 'react';
import styles from './MenuItem.module.scss'

const MenuItem = ({image, name, price}) => {

    return (
        <>
        <div className={styles.menuitem}>
            <img src={image} alt={name}></img>
            <div className={styles.details}>
                <div><h4>{name}</h4>
                <p>₦{price}</p>
                </div>
                <button>ADD TO CART</button>
            </div>
        </div>
        </>
    );
};

export default MenuItem;
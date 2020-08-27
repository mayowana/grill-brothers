import React from 'react';
import styles from './MenuItem.module.scss'

const MenuItem = ({image, name, price}) => {

    return (
        <>
        <div className={styles.menuitem}>
            <img src={image} alt={name}></img>
            <div>
                <h4>{name}</h4>
                <p>₦{price}</p>
            </div>
        </div>
        </>
    );
};

export default MenuItem;
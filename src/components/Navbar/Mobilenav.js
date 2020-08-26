import React, { useState } from 'react';
import styles from './Mobilenav.module.scss';

const Mobilenav = (props) => {

    return(
    <div className={styles.navmenu}>
        <ul className={styles.navlist}>
            <li><a>MENU</a></li>
            <li><a>ABOUT</a></li>
            <li><a>CONTACT</a></li>
        </ul>
    </div>
    )
};

export default Mobilenav;
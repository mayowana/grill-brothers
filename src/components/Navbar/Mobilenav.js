import React from 'react';
import styles from './Mobilenav.module.scss';

const Mobilenav = (props) => {

    return(
    <div className={styles.navmenu}>
        <ul className={styles.navlist}>
            <li><a href='/'>MENU</a></li>
            <li><a href='/'>ABOUT</a></li>
            <li><a href='/'>CONTACT</a></li>
        </ul>
    </div>
    )
};

export default Mobilenav;
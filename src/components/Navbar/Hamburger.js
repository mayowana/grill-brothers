import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Hamburger.module.scss';

const Hamburger = ({ onClickValue }) => {
    
    function handleClick(e) {
        onClickValue(e.target.name);
      }

    return (<FontAwesomeIcon className={styles.fabars} icon="bars" onClick={handleClick}></FontAwesomeIcon>)
};
export default Hamburger;
import React from 'react';
import styles from './Navbar.module.scss';
import logo from './assets/logo.jpeg';
import header from './assets/header.png'
import Mobilemenu from './Mobilemenu';
import CartModal from './CartModal';


class Navbar extends React.Component {

    render () {

        return (
            <>
                <header>

                    <div className={styles.navbox}>
                        <nav className={styles.navbar}>

                            <Mobilemenu />
                            
                            <div className={styles.logobox}>
                                <img src={logo} className={styles.logo} alt=""></img>
                            </div>

                            <div className={styles.navmenu}>
                                <ul className={styles.navlist}>
                                    <li><a href="/">MENU</a></li>
                                    <li><a href="/">ABOUT</a></li>
                                    <li><a href="/">CONTACT</a></li>
                                </ul>
                            </div>

                            <div>
                                <CartModal />
                            </div>
                        </nav>
                    </div>

                    <div className={styles.headcontent}> 
                <div className={styles.headimage}>
                    <img src={header} className={styles.mainimg} alt="header"></img>
                </div>
                <div className={styles.headtext}>
                    <h1>Grill Brothers.</h1>
                    <h1>Where Grilled Food Lives.</h1>
                    <button className={styles.ordernow}>ORDER NOW</button>
                </div>
            </div>

                </header>
            </>
        )
    }
}

export default Navbar
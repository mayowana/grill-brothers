import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import MenuItem from './MenuItem/MenuItem'
import styles from './Menu.module.scss'
import {addToCartAction} from '../../redux/actions/cartActions';
import Backdrop from '../Backdrop/Backdrop'

const MenuItems = () => {
const meal = useSelector(state => state.menuReducer);
const dispatch = useDispatch();

const cart = useSelector(state => state.cartReducer.cart);
console.log(cart);

const [showBack, setShowBack] = useState(false);
const [error, setError] = useState('');

const addToCart = (meals) => {
  let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === meals.id) addIt = false;
    }
    if (addIt) {
      dispatch(addToCartAction(cart, meals))
    } else setShowBack(true);
    setError(meals.name);
  }


const protmeals = meal.meals.protein.map((meals) => (
  <MenuItem key={meals.id}
  name={meals.name}
  image={meals.image}
  price={meals.price}
  clicked={() => addToCart(meals)}>
  </MenuItem>
));

const sidemeals = meal.meals.sides.map((meals) => (
  <MenuItem key={meals.id}
  name={meals.name}
  image={meals.image}
  price={meals.price}
  clicked={() => addToCart(meals)}>
  </MenuItem>
));

const burgmeals = meal.meals.burgers.map((meals) => (
  <MenuItem key={meals.id}
  name={meals.name}
  image={meals.image}
  price={meals.price}
  clicked={() => addToCart(meals)}>
  </MenuItem>
));

const traymeals = meal.meals.trays.map((meals) => (
  <MenuItem key={meals.id}
  name={meals.name}
  image={meals.image}
  price={meals.price}
  clicked={() => addToCart(meals)}>
  </MenuItem>
));
    return (
    <>
      { showBack ? <Backdrop /> : null}
      { showBack ? <div className={styles.modal}> <p> {error} is already in your cart</p> <button onClick={() => setShowBack(false)}>CLOSE</button></div> : null};
      <div className={styles.menuclass}>
        <h3>OUR MENU</h3>
        <h4>Protein</h4>
        <div className={styles.menu}>{protmeals}</div>
       <h4>Sides</h4>
       <div className={styles.menu}>{sidemeals}</div>
       <h4>Burgers</h4>
       <div className={styles.menu}>{burgmeals}</div>
       <h4>Trays</h4>
       <div className={styles.menu}>{traymeals}</div>
      </div>
    </>
  );
};

export default MenuItems;

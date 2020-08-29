import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import MenuItem from './MenuItem/MenuItem'
import styles from './Menu.module.scss'
import {addToCartAction} from '../../redux/actions/cartActions'

const MenuItems = () => {
const meal = useSelector(state => state.menuReducer);
const dispatch = useDispatch();

const [cart, setCart] = useState([]);
console.log(cart)

const addToCart = (e) => {
  setCart([...cart, e]);
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

import React, { useState } from "react";
import {useSelector} from 'react-redux'
import MenuItem from './MenuItem/MenuItem'
import styles from './Menu.module.scss'

const MenuItems = () => {
const meal = useSelector(state => state.menuReducer);
console.log(meal.meals);


const protmeals = meal.meals.protein.map((meals, index) => (
  <MenuItem key={index}
  name={meals.name}
  image={meals.image}
  price={meals.price}>
  </MenuItem>
));

const sidemeals = meal.meals.sides.map((meals, index) => (
  <MenuItem key={index}
  name={meals.name}
  image={meals.image}
  price={meals.price}>
  </MenuItem>
));

const burgmeals = meal.meals.burgers.map((meals, index) => (
  <MenuItem key={index}
  name={meals.name}
  image={meals.image}
  price={meals.price}>
  </MenuItem>
));

const traymeals = meal.meals.trays.map((meals, index) => (
  <MenuItem key={index}
  name={meals.name}
  image={meals.image}
  price={meals.price}>
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

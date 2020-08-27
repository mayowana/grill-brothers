import React, { useState } from "react";
import {useSelector} from 'react-redux'
import MenuItem from './MenuItem/MenuItem'
import styles from './Menu.module.scss'

const MenuItems = () => {
const meal = useSelector(state => state.menuReducer);
console.log(meal.meals);


{ /* const menu = meal.meals.protein.map((meals, index) => (
  <MenuItem key={index}
  name={meals.name}
  image={meals.image}
  price={meals.price}>
  </MenuItem>
)); */}
    return (
    <>
      <div className={styles.menu}>
      
      </div>
    </>
  );
};

export default MenuItems;

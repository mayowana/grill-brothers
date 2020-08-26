import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Mobilenav from "./Mobilenav";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Mobilemenu.module.scss";

const Mobilemenu = () => {
  let [showMenuStatus, showMenu] = useState(false);

  const clicked = () => {
    showMenu((showMenuStatus = !showMenuStatus));
  };

  let mobilenav;
  let backdrop;

  if (showMenuStatus) {
    mobilenav = <Mobilenav />;
    backdrop = <Backdrop />;
  }

  return (
    <>
      <div className={styles.mobilenav}>
        <Hamburger onClickValue={clicked} />
        {mobilenav}
        {backdrop}
      </div>
    </>
  );
};



export default Mobilemenu;

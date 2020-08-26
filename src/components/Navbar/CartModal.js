import React, {useState} from "react";
import CartIcon from "./CartIcon";
import CartTable from "./CartTable";
import Backdrop from "../Backdrop/Backdrop";

const CartModal = () => {
  
  let [showTrayStatus, showTray] = useState(false);
    
   const clicked = () => {
    showTray(showTrayStatus = !showTrayStatus);
 };

  let carttable;
  let backdrop;

  if (showTrayStatus) {
    carttable = <CartTable />;
    backdrop = <Backdrop />;
  }

  return (
    <>
      <CartIcon onClickValue={clicked} />
      {carttable}
      {backdrop}
    </>
  );
};

export default CartModal;

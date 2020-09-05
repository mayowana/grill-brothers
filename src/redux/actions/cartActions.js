const total = (newCart) => {
    let totalVal = 0;
    for (let i = 0; i < newCart.length; i++) {
      totalVal += newCart[i].price;
    }
    return totalVal;
  };


export const addToCartAction = (cart, meals) => {
    const newCart = [...cart, meals];
    const newTotal = total(newCart);
    return {type: 'ADD_TO_CART', payload: {newCart, newTotal}}
}

export const removeFromCartAction = (meals, cart) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== meals.id);
    const newTotal = total(hardCopy)
    return {type: 'REMOVE_FROM_CART', payload: {newCart: hardCopy, newTotal: newTotal}
}}
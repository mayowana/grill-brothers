export const addToCartAction = (meals) => {
    return {type: 'ADD_TO_CART', payload: {meals}}
}

export const removeFromCartAction = (meals, cart) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== meals.id);
    return {type: 'REMOVE_FROM_CART', payload: hardCopy}
}
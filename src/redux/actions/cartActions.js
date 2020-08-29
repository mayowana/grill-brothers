export const addToCartAction = (meal, price) => {
    return {type: 'ADD_TO_CART', payload: {meal, price}}
}
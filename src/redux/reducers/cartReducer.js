const INITIAL_STATE = {
    cart: [],
    totalPrice: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, payload.meal],
                totalPrice: state.price + payload.price
            }
    } 
    return state
}

export default cartReducer;
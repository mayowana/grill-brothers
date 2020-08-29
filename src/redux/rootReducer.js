import { combineReducers } from "redux";
import menuReducer from './reducers/menuReducer'
import cartReducer from './reducers/cartReducer'


const rootReducer = combineReducers({
    menuReducer,
    cartReducer
});

export default rootReducer;
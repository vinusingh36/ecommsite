import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import productsReducer from './Reducers/productsReducer';
import paymentReducer from './Reducers/paymentReducer';
import cartReducer from './Reducers/cartReducers';
import wishlistReducer from './Reducers/wishlistReducer';
import accountsReducer from './Reducers/accountsReducers';
import { thunk } from 'redux-thunk';



let rootReducer = combineReducers({ productsReducer, paymentReducer, cartReducer, wishlistReducer, accountsReducer })

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
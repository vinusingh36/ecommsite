import { combineReducers, legacy_createStore as createStore } from 'redux'
import productsRedcuer from './Reducers/productsReducer';
import paymentRedcuer from './Reducers/paymentReducer';
import cartRedcuer from './Reducers/cartReducers';
import wishlistRedcuer from './Reducers/wishlistReducer';
import accountsRedcuer from './Reducers/accountsReducers';



let rootReducer = combineReducers({ productsRedcuer, paymentRedcuer, cartRedcuer, wishlistRedcuer, accountsRedcuer })

const Store = createStore(rootReducer);

export default Store;
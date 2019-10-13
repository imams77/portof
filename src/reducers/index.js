import { combineReducers } from 'redux'
import productReducer from './products'
import cartReducer from './cart'
import wishlistReducer from './wishlist'
import compareReducer from './compare'
import { IntlReducer as Intl } from 'react-redux-multilingual'
import filterReducer from './filters';

const rootReducer = combineReducers({
    productData: productReducer,
    cartData: cartReducer,
    wishlistData: wishlistReducer,
    compareData: compareReducer,
    filterData: filterReducer,
    Intl
});

export default rootReducer
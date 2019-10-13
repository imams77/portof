import { CHANGE_CURRENCY, RECEIVE_PRODUCTS } from '../constants/action-types'

const initState = {
    products: [],
    currencySymbol: '$'
}

const productReducer = (state = initState, action) => {
   if(action.type === RECEIVE_PRODUCTS){
        return {
            ...state,
            products: action.products
        }
   }

   if(action.type === CHANGE_CURRENCY){
       return{
           ...state,
           currencySymbol: action.currencySymbol
       }
   }

   return state;
}

export default productReducer
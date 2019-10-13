import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART, DECREMENT_QTY } from '../constants/action-types'

const initState = {
    cart: []
}

export default function cartReducer(state = initState, action){
    if(action.type === ADD_TO_CART){
        const productId = action.product.id;
        if(state.cart.findIndex(product => product.id === productId) !== -1){

            const cart = state.cart.reduce((cartArr, product) => {
                if (product.id === productId){
                    cartArr.push({ ...product, qty: product.qty+action.qty, sum: (product.price - (product.price*(product.discount/100)))*(product.qty+action.qty) }) // Increment qty
                }else {
                    cartArr.push(product)
                }
                return cartArr
            }, [])
            return { ...state, cart }
        }
        return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: (action.product.price - (action.product.price*(action.product.discount/100)))*action.qty }] }
    }

    if(action.type === DECREMENT_QTY){
        if (state.cart.findIndex(product => product.id === action.productId) !== -1) {
            const cart = state.cart.reduce((cartArr, product) => {
                if (product.id === action.productId && product.qty > 1) {
                    cartArr.push({ ...product, qty: product.qty-1, sum: (product.price - (product.price*(product.discount/100)))*(product.qty-1) }) // Decrement qty
                } else {
                    cartArr.push(product)
                }

                return cartArr
            }, [])

            return { ...state, cart }
        }

        return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: (action.product.price - (action.product.price*(action.product.discount/100)))*action.qty }] }
    }

    if(action.type === REMOVE_FROM_CART){
        return {
            cart: state.cart.filter(item => item.id !== action.productId)
        }
    }

    if(action.type === REMOVE_ALL_FROM_CART){
        return {
            ...state,
            cart: []
        }
    }
    return state;
}
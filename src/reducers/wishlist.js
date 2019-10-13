import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from '../constants/action-types'

const initState = {
    wishlist: []
}

export default function wishlistReducer(state = initState, action){
    if(action.type === ADD_TO_WISHLIST){
        const productId = action.product._id
            if (state.wishlist.findIndex(product => product._id === productId) !== -1) {
                const wishlist = state.wishlist.reduce((wishlistArr, product) => {
                    if (product._id === productId) {
                        wishlistArr.push({ ...product }) 
                    } else {
                        wishlistArr.push(product)
                    }
                    return wishlistArr
                }, [])

                return { ...state, wishlist }
            }

            return { ...state, wishlist: [...state.wishlist, action.product] }
    }

    if(action.type === REMOVE_FROM_WISHLIST){
        return {
            wishlist: state.wishlist.filter(item => item.id !== action.productId)
        }
    }
    return state;
}
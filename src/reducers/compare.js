import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from '../constants/action-types'

const initState = {
    compareItems: []
}

export default function compareReducer(state = initState, action){
    if(action.type === ADD_TO_COMPARE){
        const productId = action.product.id
        if (state.compareItems.findIndex(product => product.id === productId) !== -1) {
            const compareItems = state.compareItems.reduce((compareArr, product) => {
                if (product.id === productId) {
                    compareArr.push({ ...product }) 
                } else {
                    compareArr.push(product)
                }
                return compareArr
            }, [])

            return { ...state, compareItems }
        }

        return { ...state, compareItems: [...state.compareItems, action.product] }
    }

    if(action.type === REMOVE_FROM_COMPARE){
        return {
            compareItems: state.compareItems.filter(item => item.id !== action.productId)
        }
    }
    return state;
}
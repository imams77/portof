import { FILTER_CATEGORY, FILTER_COLOR, FILTER_SIZE, FILTER_TAG, FILTER_PRICE, FILTER_SORT } from '../constants/action-types'

const initState = {
    value: { min: 100, max: 900 },
    sortBy: ""
};

const filterReducer = (state = initState, action) => {

    if(action.type === FILTER_CATEGORY){
        return {
            ...state,
            category: action.category
        }
    }

    if(action.type === FILTER_COLOR){
        return {
            ...state,
            color: action.color
        }
    }

    if(action.type === FILTER_SIZE){
        return {
            ...state,
            size: action.size
        }
    }

    if(action.type === FILTER_TAG){
        return {
            ...state,
            tag: action.tag
        }
    }

    if(action.type === FILTER_PRICE){
        return {
            ...state,
            value: {min: action.value.value.min, max: action.value.value.max }
        }
    }

    if(action.type === FILTER_SORT){
        return {
            ...state,
            sortBy: action.sortBy
        }
    }

   return state;

}

export default filterReducer
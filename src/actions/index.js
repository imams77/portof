import * as actionTypes from '../constants/action-types'
import { toast } from 'react-toastify'
import products from '../data/products'

export const receiveProducts = products => ({
    type: actionTypes.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    dispatch(receiveProducts(products));
}

// cart actions
export const addToCart = (product, qty) => (dispatch) => {
    toast.success("Added to Cart", {
        position: toast.POSITION.BOTTOM_LEFT
    });

    dispatch(addToCartDispatch(product, qty))
}

export const addToCartDispatch = (product, qty) => ({
    type: actionTypes.ADD_TO_CART,
    product,
    qty
});

export const removeFromCart = projectId => (dispatch) => {
    toast.error("Removed from Cart",{
        position: toast.POSITION.BOTTOM_LEFT
    });
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        projectId
    })
};

export const removeAllFromCart = () => (dispatch) => {
   
    let confirmation = window.confirm('Are you sure?');
    if(confirmation === true){
        toast.error("All Products Removed from Cart",{
            position: toast.POSITION.BOTTOM_LEFT
        });
        dispatch({
            type: actionTypes.REMOVE_ALL_FROM_CART
        })
    }
};

export const incrementQty = (project,qty) => (dispatch) => {
    toast.success("Incremented to Cart",{
        position: toast.POSITION.BOTTOM_LEFT
    });
    dispatch(addToCartDispatch(project, qty))

}

export const decrementQty = productId => (dispatch) => {
    toast.warn("Item Decremented From Cart",{
        position: toast.POSITION.BOTTOM_LEFT
    });

    dispatch({type: actionTypes.DECREMENT_QTY, productId})
};

// wishlist actions
export const addToWishlist = (product) => (dispatch) => {
    toast.success("Added to Wishlist", {
        position: toast.POSITION.BOTTOM_LEFT
    });
    dispatch(addToWishlistDispatch(product))
}

export const addToWishlistDispatch = (product) => ({
    type: actionTypes.ADD_TO_WISHLIST,
    product
});

export const removeFromWishlist = productId => (dispatch) => {
    toast.error("Removed from Wishlist", {
        position: toast.POSITION.BOTTOM_LEFT
    });
    dispatch({
        type: actionTypes.REMOVE_FROM_WISHLIST,
        productId
    })
};

export const addToCartAndRemoveFromWishlist = (product,qty) => (dispatch) => {
    toast.success("Added to Cart", {
        position: toast.POSITION.BOTTOM_LEFT
    });
    dispatch(addToCartDispatch(product, qty));
    dispatch(removeFromWishlist(product.id));
}

//compare actions
export const addToCompare = (product) => (dispatch) => {
    toast.success("Added to Compare", {
        position: toast.POSITION.BOTTOM_LEFT
    });
    dispatch(addToCompareDispatch(product))
}

export const addToCompareDispatch= (product) => ({
    type: actionTypes.ADD_TO_COMPARE,
    product
});

export const removeFromCompare = productId => (dispatch) => {
    toast.warn("Removed from Compare", {
        position: toast.POSITION.BOTTOM_LEFT
    });
    dispatch({
        type: actionTypes.REMOVE_FROM_COMPARE,
        productId
    })
};


// change Currency
export const changeCurrency = (currencySymbol) => ({
    type: actionTypes.CHANGE_CURRENCY,
    currencySymbol
});


// filters
export const filterCategory = (category) => ({
    type: actionTypes.FILTER_CATEGORY,
    category
});

export const filterColor = (color) => ({
    type: actionTypes.FILTER_COLOR,
    color
});

export const filterSize = (size) => ({
    type: actionTypes.FILTER_SIZE,
    size
});

export const filterTag = (tag) => ({
    type: actionTypes.FILTER_TAG,
    tag
});

export const filterPrice = (value) => ({
    type: actionTypes.FILTER_PRICE,
    value
});

export const filterSort = (sortBy) => ({
    type: actionTypes.FILTER_SORT,
    sortBy
});
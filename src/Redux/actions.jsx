import { type } from "@testing-library/user-event/dist/type"
import { ADD_WISHLIST_DATA_SUCCESS, DEC_CART_PRODUCTS_SUCCESS, GET_CART_PRODUCTS_ERROR, GET_CART_PRODUCTS_LOADING, GET_CART_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_SUCCESS, GET_WISHLIST_DATA_ERROR, GET_WISHLIST_DATA_LOADING, GET_WISHLIST_DATA_SUCCESS, INC_CART_PRODUCTS_SUCCESS, REMOVE_WISHLIST_DATA_SUCCESS, SET_SIGNUP_USERDATA, SET_USER_ADDRESS, SET_USER_LOGIN_SUCCESS, SET_USER_LOGOUT_SUCCESS } from "./actionTypes"


export const getProductsLoadingAction = () => {
    return {
        type: GET_PRODUCTS_LOADING
    }
}
export const getProductsErrorAction = () => {
    return {
        type: GET_PRODUCTS_ERROR
    }
}
export const getProductsSuccessAction = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}


export const getSingleProductSuccessAction = (data) => {
    return {
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: data
    }
}


//Cart Data

export const getCartProductsLoadingAction = () => {
    return {
        type: GET_CART_PRODUCTS_LOADING
    }
}
export const getCartProductsErrorAction = () => {
    return {
        type: GET_CART_PRODUCTS_ERROR
    }
}
export const getCartProductsSuccessAction = (cartData) => {
    return {
        type: GET_CART_PRODUCTS_SUCCESS,
        payload: cartData
    }
}
export const decCartProductsSuccessAction = (id) => {
    return {
        type: DEC_CART_PRODUCTS_SUCCESS,
        payload: id
    }
}
export const incCartProductsSuccessAction = (id) => {
    return {
        type: INC_CART_PRODUCTS_SUCCESS,
        payload: id
    }
}

export const getUserAddress = (addressData) => {
    return {
        type: SET_USER_ADDRESS,
        payload: addressData
    }
}

export const setUserSignupDataAction = (userData) => {
    return {
        type: SET_SIGNUP_USERDATA,
        payload: userData
    }
}

export const setUserLoginSuccess = () => {
    return {
        type: SET_USER_LOGIN_SUCCESS
    }
}
export const setUserLogoutSuccess = () => {
    return {
        type: SET_USER_LOGOUT_SUCCESS
    }
}

// export const emptyCart = () => {
//     console.log(">>>>>>>");
//     return {
//         type: EMPTY_CART
//     }
// }

//WishList Data actions
export const getwWishListDataLoading = () => {
    return {
        type: GET_WISHLIST_DATA_LOADING
    }
}
export const getwWishListDataError = () => {
    return {
        type: GET_WISHLIST_DATA_ERROR
    }
}
export const getwWishListDataSuccess = (wishlistData) => {
    return {
        type: GET_WISHLIST_DATA_SUCCESS,
        payload: wishlistData
    }
}

export const addWishlistDataSuccess = (newWishedData) => {
    return {
        type: ADD_WISHLIST_DATA_SUCCESS,
        payload: newWishedData
    }
}
export const removeWishlistDataSuccess = (id) => {
    return {
        type: REMOVE_WISHLIST_DATA_SUCCESS,
        payload: id
    }
}
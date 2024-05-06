import { DEC_CART_PRODUCTS_SUCCESS, DELETE_CART_PRODUCTS_SUCCESS, GET_CART_PRODUCTS_ERROR, GET_CART_PRODUCTS_LOADING, GET_CART_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_SUCCESS, INC_CART_PRODUCTS_SUCCESS } from "./actionTypes"


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



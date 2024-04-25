import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./actionTypes"


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
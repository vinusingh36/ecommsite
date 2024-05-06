import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_SUCCESS } from "../actionTypes";


let initData = {
    isLoading: false,
    isError: false,
    products: [],
    currProduct: []
}

const productsReducer = (state = initData, action) => {

    switch (action.type) {
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                isError: false,
                isLoading: false,
                currProduct: action.payload
            }
    }

    return state;
}

export default productsReducer;
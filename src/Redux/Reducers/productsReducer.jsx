import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "../actionTypes";
import { getProductsSuccessAction } from "../actions";

let initData = {
    isLoading: false,
    isErorr: false,
    products: []
}

const productsReducer = (state = initData, action) => {

    switch (action.type) {
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
                isErorr: false
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isErorr: false,
                products: action.payload
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
            }

    }

    return state;
}

export default productsReducer;
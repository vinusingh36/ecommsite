import { DEC_CART_PRODUCTS_SUCCESS, GET_CART_PRODUCTS_ERROR, GET_CART_PRODUCTS_LOADING, GET_CART_PRODUCTS_SUCCESS, INC_CART_PRODUCTS_SUCCESS } from "../actionTypes"

let initData = {
    isLoading: false,
    isError: false,
    cartProducts: []
}

const cartReducer = (state = initData, action) => {
    switch (action.type) {
        case GET_CART_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_CART_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                cartProducts: action.payload
            }
        case GET_CART_PRODUCTS_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        case DEC_CART_PRODUCTS_SUCCESS:
            return {
                ...state,
                cartProducts: state.cartProducts.map((product) => {
                    if (product.id === action.payload && product.quantity > 1) {
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        };
                    }
                    return product;
                }),
            };
        case INC_CART_PRODUCTS_SUCCESS:
            return {
                ...state,
                cartProducts: state.cartProducts.map((product) => {
                    if (product.id === action.payload && product.quantity < 10) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    }
                    return product;
                }),
            };
        default: {
            return state;
        }
    }

}

export default cartReducer;